import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.admissions.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accUni, accSt1, accSt2 ] =
  await stdlib.newTestAccounts(3, startingBalance);
console.log('Hello, Univeristy, Student and Student1!');

console.log('Launching...');
const ctcUni = accUni.contract(backend);
const ctcSt1 = accSt1.contract(backend, ctcUni.getInfo());
const ctcSt2 = accSt2.contract(backend, ctcUni.getInfo());

const student = (who) => ({
  getStudentAddress: () => {
      return who.getAddress();
  },
  getStudentUniversity: () => {
      return accUni.getAddress();
  }
});

const courseNFT = await stdlib.launchToken(accUni,'courseNFT', 'CNFT', {
  supply : 1,
  total : 10,
  decimals : 2
});

await accSt1.tokenAccept(courseNFT.id);
await accSt2.tokenAccept(courseNFT.id);

const balStu1 = await accSt1.balanceOf(courseNFT.id);
const balStu2 = await accSt2.balanceOf(courseNFT.id);


console.log('Starting backends...');

console.log(`Balance if NFT of Student ${balStu1}`);
console.log(`Balance if NFT of Student1 ${balStu2}`);
console.log(`Balance if NFT of University ${await accUni.balanceOf(courseNFT.id)}`);

await Promise.all([
  backend.University(ctcUni, {
    ...stdlib.hasRandom,
    university : accUni.getAddress(),
    price : 100,
    numberOfStudents : 2,
    getAmount : () => {
      return 1;
    },
    startAdmissions : () => {
      return true;
    },
    getCourseNFT : async () => {
      return courseNFT.id;
    },
    notifyStudent : (status) => {
        if(status) console.log('Admission has been started');
        else console.log('Admission is not started');
    }
  }),
  backend.Student(ctcSt1, {
    ...stdlib.hasRandom,
    ...student(accSt1)
  }),
  backend.Student1(ctcSt2, {
    ...stdlib.hasRandom,
    ...student(accSt2)
  }),
]);

const balStu11 = await accSt1.balanceOf(courseNFT.id);
const balStu21 = await accSt2.balanceOf(courseNFT.id);

console.log(`Balance if NFT of Student ${balStu11}`);
console.log(`Balance if NFT of Student_1 ${balStu21}`);
console.log(`Balance if NFT of University ${await accUni.balanceOf(courseNFT.id)}`);

console.log('Goodbye, Univeristy, Student and Student1!');
