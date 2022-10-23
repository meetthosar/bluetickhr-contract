// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc5],
      4: [ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Student_applyForCourse4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Student_applyForCourse4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Student_applyForCourse4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v595, v597, v598, v599, v622, v628, v635, v636] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3]);
  const v659 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
    msg: 'in',
    who: 'Student_applyForCourse'
    });
  const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v661 = v659[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v662 = v659[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v666 = stdlib.addressEq(v595, v661);
  stdlib.assert(v666, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
    msg: 'Applying for wrong university',
    who: 'Student_applyForCourse'
    });
  const v668 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v660), null);
  const v669 = {
    None: 0,
    Some: 1
    }[v668[0]];
  const v670 = stdlib.eq(v669, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v671 = v670 ? false : true;
  stdlib.assert(v671, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:55:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
    msg: 'Application is processed before ',
    who: 'Student_applyForCourse'
    });
  const v674 = stdlib.eq(v597, v662);
  stdlib.assert(v674, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
    msg: 'Price and courseFee does not match',
    who: 'Student_applyForCourse'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v595, v597, v598, v599, v622, v628, v635, v636, v659],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v662, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v695], secs: v697, time: v696, didSend: v414, from: v694 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Student_applyForCourse"
        });
      const v699 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '0')];
      const v701 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '2')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v699), null);
      const v713 = stdlib.safeAdd(v636, v701);
      sim_r.txns.push({
        amt: v701,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v730 = true;
      const v731 = await txn1.getOutput('Student_applyForCourse', 'v730', ctc5, v730);
      
      await stdlib.simMapSet(sim_r, 0, v699, null);
      const v740 = v635[stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0')];
      const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0')];
      const v745 = stdlib.safeSub(v741, v599);
      const v747 = stdlib.Array_set(v740, '0', v745);
      const v748 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0'), v747);
      sim_r.txns.push({
        kind: 'from',
        to: v699,
        tok: v598
        });
      const v749 = stdlib.safeSub(v628, stdlib.checkedBigNumberify('./index.rsh:62:34:decimal', stdlib.UInt_max, '1'));
      const v750 = stdlib.gt(v749, stdlib.checkedBigNumberify('./index.rsh:62:39:decimal', stdlib.UInt_max, '0'));
      const v1024 = v749;
      const v1026 = v748;
      const v1027 = v713;
      const v1029 = v750 ? v750 : false;
      if (v1029) {
        sim_r.isHalt = false;
        }
      else {
        const v1030 = v748[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
        const v1031 = v1030[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v595,
          tok: v598
          });
        sim_r.txns.push({
          kind: 'from',
          to: v595,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v598
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v695], secs: v697, time: v696, didSend: v414, from: v694 } = txn1;
  undefined /* setApiDetails */;
  const v699 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '0')];
  const v700 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '1')];
  const v701 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '2')];
  const v702 = stdlib.addressEq(v595, v700);
  stdlib.assert(v702, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:54:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
    msg: 'Applying for wrong university',
    who: 'Student_applyForCourse'
    });
  const v704 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v699), null);
  const v705 = {
    None: 0,
    Some: 1
    }[v704[0]];
  const v706 = stdlib.eq(v705, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v707 = v706 ? false : true;
  stdlib.assert(v707, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:55:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
    msg: 'Application is processed before ',
    who: 'Student_applyForCourse'
    });
  const v710 = stdlib.eq(v597, v701);
  stdlib.assert(v710, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
    msg: 'Price and courseFee does not match',
    who: 'Student_applyForCourse'
    });
  const v713 = stdlib.safeAdd(v636, v701);
  ;
  const v730 = true;
  const v731 = await txn1.getOutput('Student_applyForCourse', 'v730', ctc5, v730);
  if (v414) {
    stdlib.protect(ctc0, await interact.out(v695, v731), {
      at: './index.rsh:53:11:application',
      fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:11:function exp)', 'at ./index.rsh:59:14:application call to "k" (defined at: ./index.rsh:58:34:function exp)', 'at ./index.rsh:58:34:application call to [unknown function] (defined at: ./index.rsh:58:34:function exp)'],
      msg: 'out',
      who: 'Student_applyForCourse'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v699, null);
  const v740 = v635[stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0')];
  const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0')];
  const v745 = stdlib.safeSub(v741, v599);
  const v747 = stdlib.Array_set(v740, '0', v745);
  const v748 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0'), v747);
  ;
  const v749 = stdlib.safeSub(v628, stdlib.checkedBigNumberify('./index.rsh:62:34:decimal', stdlib.UInt_max, '1'));
  const v750 = stdlib.gt(v749, stdlib.checkedBigNumberify('./index.rsh:62:39:decimal', stdlib.UInt_max, '0'));
  const v1024 = v749;
  const v1026 = v748;
  const v1027 = v713;
  const v1029 = v750 ? v750 : false;
  if (v1029) {
    return;
    }
  else {
    const v1030 = v748[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
    const v1031 = v1030[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  };
export async function _Student_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Student_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Student_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v595, v597, v598, v599, v622, v628, v635, v636] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3]);
  const v755 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:66:7:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:7:function exp)', 'at ./index.rsh:65:37:application call to [unknown function] (defined at: ./index.rsh:65:37:function exp)'],
    msg: 'in',
    who: 'Student_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v595, v597, v598, v599, v622, v628, v635, v636, v755],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v757], secs: v759, time: v758, didSend: v516, from: v756 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Student_timesUp"
        });
      ;
      const v760 = true;
      const v761 = await txn1.getOutput('Student_timesUp', 'v760', ctc5, v760);
      
      const v1039 = v635[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
      const v1040 = v1039[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v595,
        tok: v598
        });
      sim_r.txns.push({
        kind: 'from',
        to: v595,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v598
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v757], secs: v759, time: v758, didSend: v516, from: v756 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v760 = true;
  const v761 = await txn1.getOutput('Student_timesUp', 'v760', ctc5, v760);
  stdlib.protect(ctc0, await interact.out(v757, v761), {
    at: './index.rsh:66:7:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:7:function exp)', 'at ./index.rsh:67:8:application call to "k" (defined at: ./index.rsh:66:7:function exp)', 'at ./index.rsh:65:37:application call to [unknown function] (defined at: ./index.rsh:65:37:function exp)'],
    msg: 'out',
    who: 'Student_timesUp'
    });
  
  const v1039 = v635[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
  const v1040 = v1039[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  };
export async function University(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for University expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for University expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v572 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v573 = [v572];
  const v577 = stdlib.protect(ctc2, interact.deadline, 'for University\'s interact field deadline');
  const v578 = stdlib.protect(ctc2, interact.numberOfStudents, 'for University\'s interact field numberOfStudents');
  const v579 = stdlib.protect(ctc2, interact.price, 'for University\'s interact field price');
  const v580 = stdlib.protect(ctc3, interact.university, 'for University\'s interact field university');
  
  const v583 = stdlib.protect(ctc4, await interact.startAdmissions(), {
    at: './index.rsh:24:63:application',
    fs: ['at ./index.rsh:22:18:application call to [unknown function] (defined at: ./index.rsh:22:22:function exp)'],
    msg: 'startAdmissions',
    who: 'University'
    });
  const v584 = stdlib.protect(ctc2, await interact.getAmount(), {
    at: './index.rsh:27:46:application',
    fs: ['at ./index.rsh:22:18:application call to [unknown function] (defined at: ./index.rsh:22:22:function exp)'],
    msg: 'getAmount',
    who: 'University'
    });
  const v585 = stdlib.protect(ctc5, await interact.getCourseNFT(), {
    at: './index.rsh:29:55:application',
    fs: ['at ./index.rsh:22:18:application call to [unknown function] (defined at: ./index.rsh:22:22:function exp)'],
    msg: 'getCourseNFT',
    who: 'University'
    });
  const v586 = stdlib.eq(v579, stdlib.checkedBigNumberify('./index.rsh:30:20:decimal', stdlib.UInt_max, '0'));
  const v587 = v586 ? false : true;
  stdlib.assert(v587, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:30:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:22:18:application call to [unknown function] (defined at: ./index.rsh:22:22:function exp)'],
    msg: null,
    who: 'University'
    });
  const v589 = stdlib.gt(v578, stdlib.checkedBigNumberify('./index.rsh:31:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v589, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:31:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:22:18:application call to [unknown function] (defined at: ./index.rsh:22:22:function exp)'],
    msg: null,
    who: 'University'
    });
  const v591 = stdlib.eq(v584, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, '0'));
  const v592 = v591 ? false : true;
  stdlib.assert(v592, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:22:18:application call to [unknown function] (defined at: ./index.rsh:22:22:function exp)'],
    msg: null,
    who: 'University'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v580, v583, v579, v585, v584, v578, v577],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4, ctc2, ctc5, ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v595, v596, v597, v598, v599, v600, v601], secs: v603, time: v602, didSend: v91, from: v594 } = txn1;
      
      const v604 = v573[stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0')];
      const v605 = stdlib.Array_set(v604, '0', stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0'));
      const v606 = stdlib.Array_set(v573, stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0'), v605);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v598
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc2, ctc5, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v595, v596, v597, v598, v599, v600, v601], secs: v603, time: v602, didSend: v91, from: v594 } = txn1;
  const v604 = v573[stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0')];
  const v605 = stdlib.Array_set(v604, '0', stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0'));
  const v606 = stdlib.Array_set(v573, stdlib.checkedBigNumberify('./index.rsh:35:14:dot', stdlib.UInt_max, '0'), v605);
  ;
  ;
  const v608 = stdlib.safeMul(v600, v599);
  
  const txn2 = await (ctc.sendrecv({
    args: [v594, v595, v596, v597, v598, v599, v600, v601, v602, v606],
    evt_cnt: 0,
    funcNum: 1,
    lct: v602,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:14:dot', stdlib.UInt_max, '0'), [[v608, v598]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v611, time: v610, didSend: v100, from: v609 } = txn2;
      
      const v612 = stdlib.safeMul(v600, v599);
      ;
      const v613 = v606[stdlib.checkedBigNumberify('./index.rsh:39:14:dot', stdlib.UInt_max, '0')];
      const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:39:14:dot', stdlib.UInt_max, '0')];
      const v615 = stdlib.safeAdd(v614, v612);
      const v617 = stdlib.Array_set(v613, '0', v615);
      const v618 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./index.rsh:39:14:dot', stdlib.UInt_max, '0'), v617);
      sim_r.txns.push({
        amt: v612,
        kind: 'to',
        tok: v598
        });
      if (v596) {
        
        }
      else {
        }
      const v622 = stdlib.safeAdd(v602, v601);
      const v627 = v596;
      const v628 = v600;
      const v629 = v610;
      const v635 = v618;
      const v636 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v651 = stdlib.gt(v628, stdlib.checkedBigNumberify('./index.rsh:52:38:decimal', stdlib.UInt_max, '0'));
        const v652 = v627 ? v651 : false;
        
        return v652;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v767 = v635[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
        const v768 = v767[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v595,
          tok: v598
          });
        sim_r.txns.push({
          kind: 'from',
          to: v595,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v598
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v611, time: v610, didSend: v100, from: v609 } = txn2;
  const v612 = stdlib.safeMul(v600, v599);
  ;
  const v613 = v606[stdlib.checkedBigNumberify('./index.rsh:39:14:dot', stdlib.UInt_max, '0')];
  const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:39:14:dot', stdlib.UInt_max, '0')];
  const v615 = stdlib.safeAdd(v614, v612);
  const v617 = stdlib.Array_set(v613, '0', v615);
  const v618 = stdlib.Array_set(v606, stdlib.checkedBigNumberify('./index.rsh:39:14:dot', stdlib.UInt_max, '0'), v617);
  ;
  const v619 = stdlib.addressEq(v594, v609);
  stdlib.assert(v619, {
    at: './index.rsh:39:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'University'
    });
  if (v596) {
    stdlib.protect(ctc0, await interact.notifyStudent(true), {
      at: './index.rsh:42:38:application',
      fs: ['at ./index.rsh:42:38:application call to [unknown function] (defined at: ./index.rsh:42:38:function exp)', 'at ./index.rsh:42:38:application call to "liftedInteract" (defined at: ./index.rsh:42:38:application)'],
      msg: 'notifyStudent',
      who: 'University'
      });
    
    }
  else {
    }
  const v622 = stdlib.safeAdd(v602, v601);
  let v627 = v596;
  let v628 = v600;
  let v629 = v610;
  let v635 = v618;
  let v636 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v651 = stdlib.gt(v628, stdlib.checkedBigNumberify('./index.rsh:52:38:decimal', stdlib.UInt_max, '0'));
    const v652 = v627 ? v651 : false;
    
    return v652;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v622],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v757], secs: v759, time: v758, didSend: v516, from: v756 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v760 = true;
      await txn4.getOutput('Student_timesUp', 'v760', ctc4, v760);
      const cv627 = false;
      const cv628 = v628;
      const cv629 = v758;
      const cv635 = v635;
      const cv636 = v636;
      
      v627 = cv627;
      v628 = cv628;
      v629 = cv629;
      v635 = cv635;
      v636 = cv636;
      
      continue;
      }
    else {
      const {data: [v695], secs: v697, time: v696, didSend: v414, from: v694 } = txn3;
      undefined /* setApiDetails */;
      const v699 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '0')];
      const v700 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '1')];
      const v701 = v695[stdlib.checkedBigNumberify('./index.rsh:53:10:spread', stdlib.UInt_max, '2')];
      const v702 = stdlib.addressEq(v595, v700);
      stdlib.assert(v702, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:54:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
        msg: 'Applying for wrong university',
        who: 'University'
        });
      const v704 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v699), null);
      const v705 = {
        None: 0,
        Some: 1
        }[v704[0]];
      const v706 = stdlib.eq(v705, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v707 = v706 ? false : true;
      stdlib.assert(v707, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:55:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
        msg: 'Application is processed before ',
        who: 'University'
        });
      const v710 = stdlib.eq(v597, v701);
      stdlib.assert(v710, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)', 'at ./index.rsh:53:71:application call to [unknown function] (defined at: ./index.rsh:53:71:function exp)'],
        msg: 'Price and courseFee does not match',
        who: 'University'
        });
      const v713 = stdlib.safeAdd(v636, v701);
      ;
      const v730 = true;
      await txn3.getOutput('Student_applyForCourse', 'v730', ctc4, v730);
      await stdlib.mapSet(map0, v699, null);
      const v740 = v635[stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0')];
      const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0')];
      const v745 = stdlib.safeSub(v741, v599);
      const v747 = stdlib.Array_set(v740, '0', v745);
      const v748 = stdlib.Array_set(v635, stdlib.checkedBigNumberify('./index.rsh:61:40:application', stdlib.UInt_max, '0'), v747);
      ;
      const v749 = stdlib.safeSub(v628, stdlib.checkedBigNumberify('./index.rsh:62:34:decimal', stdlib.UInt_max, '1'));
      const v750 = stdlib.gt(v749, stdlib.checkedBigNumberify('./index.rsh:62:39:decimal', stdlib.UInt_max, '0'));
      const cv627 = v750;
      const cv628 = v749;
      const cv629 = v696;
      const cv635 = v748;
      const cv636 = v713;
      
      v627 = cv627;
      v628 = cv628;
      v629 = cv629;
      v635 = cv635;
      v636 = cv636;
      
      continue;}
    
    }
  const v767 = v635[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
  const v768 = v767[stdlib.checkedBigNumberify('./index.rsh:71:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function Student_applyForCourse(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Student_applyForCourse expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Student_applyForCourse expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Student_applyForCourse4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Student_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Student_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Student_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Student_timesUp4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Student_applyForCourse(address,address,uint64)byte`, `Student_timesUp()byte`],
    pure: [],
    sigs: [`Student_applyForCourse(address,address,uint64)byte`, `Student_timesUp()byte`]
    },
  appApproval: `BiAOAAEEQFkIqKbrpQkDOCAoMEGgjQYmAwEAAQEAIjUAMRhBA/oqZEkiWzUBIQVbNQIxGSMSQQAIMQAoKGZCA8g2GgAXSUEAKyI1BCM1BkkhBgxAAAghBhJEKkIAM4G6ubH6BhJENhoBNhoCUDYaA1BCAIY2GgIXNQQ2GgM2GgEXSSEHDEABTkkkDEAAayQSRCQ0ARJENARJIhJMNAISEUQoZEk1AyEIWzX/STUFNf6ABNTgGC00/lCwMgY0/w9EgAkAAAAAAAAC+AGwKTUHNANXACA0AyEJWzQDIQpbNAMhC1s0/yI0AyVbMgY0A1dIETQDIQRbQgJHSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQlbNf4hCls1/SELWzX8IQhbNftXSBE1+kk1BTX5gAT3LxyqNPlQsDIGNPsMRDT5VwAgNfg0+SVbNfc0/zT5VyAgEkQ0+IgC3iJVIxNENP409xJENPeIAtuACQAAAAAAAALaAbApNQc0+CgpZjT6VwARNfaxIrIBNPyyEiSyEDT4shQ0/bIRszQDJVsjCTX1NP80/jT9NPw0+zT1Ig009TIGNPZJIls0/AkWNfRXCAk09ExQNAMhBFs09whCAWpJIwxAAI8jEkQjNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSoFJWzX/gVFbNf4hBFs1/VdxETX8gASai5F0sDT9NP4LNfs0/FcAETX6NPs0/4gCOjQDVwAgMQASRDQDVyAgNAMhDFs0/zT+NAOBaVs0A4FhWwg0A1dAARc0/TIGNPpJIls0+wgWNflXCAk0+UxQIkIA1UghDYgB2iI0ARJENARJIhJMNAISEURJNQVJSkpJVwAgNf9XIAEXNf6BIVs1/YEpWzX8gTFbNfuBOVs1+iEMWzX5gARHO/6dNP9QNP4WUQcIUDT9FlA0/BZQNPsWUDT6FlA0+RZQsIERr0k1+FcAESEFrzX2VwgJNPZMUDX3IQ2IAV6xIrIBIrISJLIQMgqyFDT8shGzMQA0/1A0/hZRBwhQNP0WUDT8FlA0+xZQNPoWUDT5FlAyBhZQNPdQKEsBVwB/ZylLAVd/A2dIIzUBMgY1AkIArDX/Nf41/TX8Nfs1+jX5Nfg19zX2NPs0/CINEEEALzT2NPcWUDT4FlA0+RZQNPoWUDT8FlA0/lA0/xZQKEsBVwBhZ0gkNQEyBjUCQgBfsSKyATT+VwARIluyEiSyEDT2shQ0+LIRs7EisgE0/7III7IQNPayB7OxIrIBIrISJLIQMgmyFTIKshQ0+LIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBzE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 2,
  stateSize: 130,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v595",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v596",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v597",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v598",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v599",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v600",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v601",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v595",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v596",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v597",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v598",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v599",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v600",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v601",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v695",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v757",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v730",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v760",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      }
    ],
    "name": "Student_applyForCourse",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Student_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v695",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v757",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200224f3803806200224f833981016040819052620000269162000500565b600080554360035562000038620002cf565b7fededbc0610b434ff35d916c3af6dc3955e77560206a2a4269d503724f7b233433383604051620000d992919060006101208201905060018060a01b038085168352835160208401526020840151818151166040850152602081015115156060850152604081015160808501528160608201511660a0850152608081015160c085015260a081015160e085015260c081015161010085015250509392505050565b60405180910390a180516000908190528151602090810182905282516040908101839052835182850180519190915280518251606081018452858152825151850151948101949094529051518201511515918301919091526200013e92909162000222565b60408201526200015134156007620002a5565b6200015b62000316565b33815260208084018051516001600160a01b0390811683850152815183015115156040808601919091528251810151606080870191909152835101519091166080808601919091528251015160a0808601919091528251015160c08086019190915291519091015160e084015243610100840181905284820151610120850152600160008190555551620001f29183910162000613565b604051602081830303815290604052600290805190602001906200021892919062000388565b505050506200072a565b6200022c62000417565b60005b600181101562000282578481600181106200024e576200024e620005b7565b6020020151828260018110620002685762000268620005b7565b6020020152806200027981620006c3565b9150506200022f565b5081818460018110620002995762000299620005b7565b60200201529392505050565b81620002cb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200030262000417565b81526020016200031162000417565b905290565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016200031162000417565b8280546200039690620006ed565b90600052602060002090601f016020900481019282620003ba576000855562000405565b82601f10620003d557805160ff191683800117855562000405565b8280016001018555821562000405579182015b8281111562000405578251825591602001919060010190620003e8565b506200041392915062000464565b5090565b60405180602001604052806001905b6200044d604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004265790505090565b5b8082111562000413576000815560010162000465565b604080519081016001600160401b0381118282101715620004ac57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620004ac57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620004fb57600080fd5b919050565b60008183036101008112156200051557600080fd5b6200051f6200047b565b8351815260e0601f19830112156200053657600080fd5b62000540620004b2565b91506200055060208501620004e3565b8252604084015180151581146200056657600080fd5b6020830152606084015160408301526200058360808501620004e3565b606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b8060005b60018110156200060d578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101620005d1565b50505050565b81516001600160a01b03168152610180810160208301516200064060208401826001600160a01b03169052565b50604083015162000655604084018215159052565b506060830151606083015260808301516200067b60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151620006bb82850182620005cd565b505092915050565b6000600019821415620006e657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200070257607f821691505b602082108114156200072457634e487b7160e01b600052602260045260246000fd5b50919050565b611b15806200073a6000396000f3fe6080604052600436106100845760003560e01c80634f78b413116100565780634f78b41314610104578063723a06a514610127578063832307571461012f578063a98bf22314610144578063ab53f2c61461015757005b80631e93b0f11461008d578063207d5c23146100b15780632c10a159146100c45780633bc5b7bf146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf3660046113cd565b61017a565b61008b6100d23660046113f7565b6101aa565b3480156100e357600080fd5b506100f76100f2366004611428565b6101d6565b6040516100a8919061145b565b6101176101123660046114a2565b610202565b60405190151581526020016100a8565b610117610260565b34801561013b57600080fd5b5060015461009e565b61008b6101523660046113f7565b61029b565b34801561016357600080fd5b5061016c6102c7565b6040516100a892919061150f565b60408051808201909152600080825260208201526101a66101a0368490038401846115f2565b82610364565b5050565b60408051808201909152600080825260208201526101a66101d0368490038401846116a0565b82610725565b60408051606081018252600080825260208201819052918101919091526101fc826109b9565b92915050565b600061020c611182565b60208082018051516001600160a01b03808916909152815151908716908301525151604090810185905280518082019091526000808252918101919091526102548282610364565b519150505b9392505050565b600061026a6111c0565b60208082015160009081905260408051808201909152818152918201526102918282610a92565b6020015192915050565b60408051808201909152600080825260208201526101a66102c1368490038401846116d8565b82610a92565b6000606060005460028080546102dc90611732565b80601f016020809104026020016040519081016040528092919081815260200182805461030890611732565b80156103555780601f1061032a57610100808354040283529160200191610355565b820191906000526020600020905b81548152906001019060200180831161033857829003601f168201915b50505050509050915091509091565b6103746004600054146011610c93565b815161038f90158061038857508251600154145b6012610c93565b6000808055600280546103a190611732565b80601f01602080910402602001604051908101604052809291908181526020018280546103cd90611732565b801561041a5780601f106103ef5761010080835404028352916020019161041a565b820191906000526020600020905b8154815290600101906020018083116103fd57829003601f168201915b50505050508060200190518101906104329190611806565b905061044a6040518060200160405280600081525090565b61045b826080015143106013610c93565b604080513381528551602080830191909152808701515180516001600160a01b0390811684860152918101519091166060830152820151608082015290517f4811908c578d6932e4701ee728daff6d22384791a8f9b3a10a37d0814bf7ecba9181900360a00190a160208085015151015182516104e7916001600160a01b03918216911614600d610c93565b60208401515151610526906001906104fe906109b9565b51600181111561051057610510611445565b1461051c57600161051f565b60005b600e610c93565b61054384602001516000015160400151836020015114600f610c93565b6020840151516040015161055a9034146010610c93565b604051600181527f14121a27f581204bf52a127935346b9db1c6eee5a65a2aad7034014245e04cee9060200160405180910390a160018084526020858101805151516001600160a01b03908116600090815260049093526040808420805460ff19169095179094558151515116825290829020805462ff000019169055908301519051515160608401516105ef929190610cb9565b6105fe8260a001516001610cd2565b81526106086111ea565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601805185518301526080808801518651909101528551838601805191151590915286518151909401939093529151439084015260c086018051845192830190945251515191516106e6939260009291829161069391610cd2565b81526020018760c001516000600181106106af576106af6118a9565b60200201516020015181526020018760c001516000600181106106d4576106d46118a9565b60200201516040015115159052610d21565b81602001516060018190525061070c8360e0015186602001516000015160400151610d95565b60208201516080015261071e81610de2565b5050505050565b610735600160005414600b610c93565b815161075090158061074957508251600154145b600c610c93565b60008080556002805461076290611732565b80601f016020809104026020016040519081016040528092919081815260200182805461078e90611732565b80156107db5780601f106107b0576101008083540402835291602001916107db565b820191906000526020600020905b8154815290600101906020018083116107be57829003601f168201915b50505050508060200190518101906107f391906118bf565b905061080b6040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16108648260c001518360a00151610f27565b815261087234156008610c93565b61088f6108883384608001518460000151610f86565b6009610c93565b81516108a7906001600160a01b03163314600a610c93565b6108af6111ea565b60208084015182516001600160a01b0391821690526060808601518451909301929092526080850151835191166040919091015260a084015182519091015261010083015160e08401516109039190610d95565b8151608001526040838101516020808401805192151590925260c08601518251909101525143908201526101208401805182516060810190935290515151845161099a936000929091829161095791610d95565b8152602001876101200151600060018110610974576109746118a9565b60200201516020015181526020018761012001516000600181106106d4576106d46118a9565b6020820180516060019190915251600060809091015261071e81610de2565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610a0557610a05611445565b1415610a82576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a4657610a46611445565b6001811115610a5757610a57611445565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610aa26004600054146015610c93565b8151610abd901580610ab657508251600154145b6016610c93565b600080805560028054610acf90611732565b80601f0160208091040260200160405190810160405280929190818152602001828054610afb90611732565b8015610b485780601f10610b1d57610100808354040283529160200191610b48565b820191906000526020600020905b815481529060010190602001808311610b2b57829003601f168201915b5050505050806020019051810190610b609190611806565b9050610b7481608001514310156017610c93565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a1610bc834156014610c93565b604051600181527f15d1fd0d88a3e3c1f9f9421b251b950b4eeb0fe407d328ec5de013e1f80ede0c9060200160405180910390a160016020830152610c0b6111ea565b815181516001600160a01b039182169052602080840151835182015260408085015184519316928101929092526060808501518451820152608080860151855182015282850180516000905260a087015181519094019390935282514394019390935260c085015182519091015260e0840151905190910152610c8d81610de2565b50505050565b816101a65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610cc4838383610f9c565b610ccd57600080fd5b505050565b600082610cdf838261197c565b91508111156101fc5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610cb0565b610d29611228565b60005b6001811015610d7557848160018110610d4757610d476118a9565b6020020151828260018110610d5e57610d5e6118a9565b602002015280610d6d81611993565b915050610d2c565b5081818460018110610d8957610d896118a9565b60200201529392505050565b600082610da283826119ae565b91508110156101fc5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610cb0565b602081015151610df3576000610e00565b6000816020015160200151115b15610eac57610e0d611273565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015181850152845160809081015181860152828601805184015160a087015280519092015160c08601529051015160e08401526004600055436001559051610e88918391016119c6565b60405160208183030381529060405260029080519060200190610ccd9291906112d0565b8051604081015190516020830151606001515151610ecb929190610cb9565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610f0d573d6000803e3d6000fd5b5060008080556001819055610f2490600290611354565b50565b6000811580610f4b57508282610f3d8183611a65565b9250610f499083611a84565b145b6101fc5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610cb0565b6000610f948385308561106d565b949350505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610ffb91611aa6565b60006040518083038185875af1925050503d8060008114611038576040519150601f19603f3d011682016040523d82523d6000602084013e61103d565b606091505b509150915061104e82826002611147565b50808060200190518101906110639190611ac2565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916110d491611aa6565b60006040518083038185875af1925050503d8060008114611111576040519150601f19603f3d011682016040523d82523d6000602084013e611116565b606091505b509150915061112782826001611147565b508080602001905181019061113c9190611ac2565b979650505050505050565b60608315611156575081610259565b8251156111665782518084602001fd5b60405163100960cb60e01b815260048101839052602401610cb0565b6040518060400160405280600081526020016111bb60408051608081018252600060208201818152928201819052606082015290815290565b905290565b6040518060400160405280600081526020016111bb60405180602001604052806000151581525090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908152602081016111bb61138e565b60405180602001604052806001905b61125d604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816112375790505090565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016112c3611228565b8152602001600081525090565b8280546112dc90611732565b90600052602060002090601f0160209004810192826112fe5760008555611344565b82601f1061131757805160ff1916838001178555611344565b82800160010185558215611344579182015b82811115611344578251825591602001919060010190611329565b506113509291506113b8565b5090565b50805461136090611732565b6000825580601f10611370575050565b601f016020900490600052602060002090810190610f2491906113b8565b6040518060a0016040528060001515815260200160008152602001600081526020016112c3611228565b5b8082111561135057600081556001016113b9565b6000608082840312156113df57600080fd5b50919050565b6000604082840312156113df57600080fd5b60006040828403121561140957600080fd5b61025983836113e5565b6001600160a01b0381168114610f2457600080fd5b60006020828403121561143a57600080fd5b813561025981611413565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061148057634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b6000806000606084860312156114b757600080fd5b83356114c281611413565b925060208401356114d281611413565b929592945050506040919091013590565b60005b838110156114fe5781810151838201526020016114e6565b83811115610c8d5750506000910152565b82815260406020820152600082518060408401526115348160608501602087016114e3565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561158257611582611549565b60405290565b6040516060810167ffffffffffffffff8111828210171561158257611582611549565b6040805190810167ffffffffffffffff8111828210171561158257611582611549565b604051610140810167ffffffffffffffff8111828210171561158257611582611549565b6000818303608081121561160557600080fd5b6040516040810181811067ffffffffffffffff8211171561162857611628611549565b604052833581526060601f198301121561164157600080fd5b61164961155f565b9150611653611588565b602085013561166181611413565b8152604085013561167181611413565b60208281019190915260609590950135604082015282529283015250919050565b8015158114610f2457600080fd5b6000604082840312156116b257600080fd5b6116ba6115ab565b8235815260208301356116cc81611692565b60208201529392505050565b600081830360408112156116eb57600080fd5b6116f36115ab565b833581526020601f198301121561170957600080fd5b61171161155f565b9150602084013561172181611692565b825260208101919091529392505050565b600181811c9082168061174657607f821691505b602082108114156113df57634e487b7160e01b600052602260045260246000fd5b8051610a8d81611413565b8051610a8d81611692565b600082601f83011261178e57600080fd5b61179661155f565b806060808501868111156117a957600080fd5b855b818110156117fa578281890312156117c35760008081fd5b6117cb611588565b81518152602080830151818301526040808401516117e881611692565b908301529086529094019382016117ab565b50919695505050505050565b6000610140828403121561181957600080fd5b604051610100810181811067ffffffffffffffff8211171561183d5761183d611549565b60405261184983611767565b81526020830151602082015261186160408401611767565b6040820152606083015160608201526080830151608082015260a083015160a08201526118918460c0850161177d565b60c0820152610120929092015160e083015250919050565b634e487b7160e01b600052603260045260246000fd5b600061018082840312156118d257600080fd5b6118da6115ce565b6118e383611767565b81526118f160208401611767565b602082015261190260408401611772565b60408201526060830151606082015261191d60808401611767565b608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061195b8582860161177d565b908201529392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561198e5761198e611966565b500390565b60006000198214156119a7576119a7611966565b5060010190565b600082198211156119c1576119c1611966565b500190565b60006101408201905060018060a01b03808451168352602080850151818501526040828187015116818601526060925082860151838601526080860151608086015260a086015160a086015260c086015160c0860160005b6001811015611a4e5782518051835285810151868401528401511515848301529184019190850190600101611a1e565b50505050505060e083015161012083015292915050565b6000816000190483118215151615611a7f57611a7f611966565b500290565b600082611aa157634e487b7160e01b600052601260045260246000fd5b500490565b60008251611ab88184602087016114e3565b9190910192915050565b600060208284031215611ad457600080fd5b81516102598161169256fea26469706673582212206c6b44edc2a9511de85ac642c5f4fa39dfd6e81f0c8cb21ab5f5d9d3b1d5ae8e64736f6c634300080c0033`,
  BytecodeLen: 8783,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:49:52:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Student_applyForCourse": Student_applyForCourse,
  "Student_timesUp": Student_timesUp,
  "University": University
  };
export const _APIs = {
  Student: {
    applyForCourse: Student_applyForCourse,
    timesUp: Student_timesUp
    }
  };
