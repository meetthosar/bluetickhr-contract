'reach 0.1';


export const admissions = Reach.App(() => {
  const University = Participant('University', {
    university : Address,
    price : UInt,
    getAmount : Fun([],UInt),
    numberOfStudents : UInt,
    deadline : UInt,
    startAdmissions : Fun([],Bool),
    getCourseNFT : Fun([],Token),
    notifyStudent : Fun([Bool],Null)
  });
  const Student = API('Student', {
    applyForCourse : Fun([Address, Address, UInt],Bool),
    timesUp: Fun([], Bool),
  });
  
  init();
  // The first one to publish deploys the contract
  University.only(() => {
    const university = declassify(interact.university);
    const startAdmission = declassify(interact.startAdmissions());
    const numberOfStudents = declassify(interact.numberOfStudents);
    const price = declassify(interact.price);
    const amt = declassify(interact.getAmount());
    const deadline = declassify(interact.deadline);
    const courseNFT = declassify(interact.getCourseNFT())
    check(price != 0);
    check(numberOfStudents > 0);
    check(amt != 0);
  });

  University.publish(university,startAdmission, price, courseNFT, amt, numberOfStudents, deadline)
  
  commit();

  University.pay([[ numberOfStudents * amt, courseNFT ]]);
  
  if(startAdmission){
    University.interact.notifyStudent(startAdmission);
  }
  
  const end = lastConsensusTime() + deadline;
  const applicants = new Set();
  assert(balance( courseNFT ) == numberOfStudents * amt, "balance of NFT is wrong");

  const [ keepwaiting , students ] = parallelReduce([ startAdmission, numberOfStudents ])
    .invariant( balance(courseNFT) == students * amt, "Insufficient Balance")
    .invariant( balance() == price * applicants.Map.size(), "Balances do not match" )
    .while(keepwaiting && students > 0)
    .api_(Student.applyForCourse, (who, studentUniversity, courseFee) => {
        check(university == studentUniversity, "Applying for wrong university");
        check( !applicants.member(who) == true, "Application is processed before ")
        check( price == courseFee, "Price and courseFee does not match")

        return [ courseFee , (k) => {
            k(true);
            applicants.insert(who);
            transfer(amt, courseNFT).to(who);
            return [ (students - 1) > 0 , students - 1 ]
        }];
    })
    .timeout( absoluteTime(end), () => {
      const [ [], k ] = call(Student.timesUp);
      k(true);
      return [ false, students ];
    });
  
    transfer(balance(courseNFT), courseNFT).to(university);
    transfer(balance()).to(university);
    commit();
  // write your program here
  exit();
});
