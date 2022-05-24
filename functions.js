// import NetInfo from "@react-native-community/netinfo";

// let attempt = 0;
// export const checkConnection = () => {
//   return NetInfo.fetch().then((state) => {
//     //return false;
//     return state.isConnected;
//     // console.log('Connection type', state.type);
//     // console.log('Is connected?', state.isConnected);
//   });
// };

// export const checkConnectionWithRetry = async (attempt, max) => {
//   // alert(attempt);
//   let res = await checkConnection();
//   if (attempt > 0 && res === false) {
//     console.log(
//       "🚀 ~ file: functions.js ~ line 17 ~ checkConnectionWithRetry ~ attempt",
//       attempt
//     );
//     await sleep(max - attempt);
//     return res || (await checkConnectionWithRetry(--attempt, max));
//   } else {
//     console.log(
//       "🚀 ~ file: functions.js ~ line 22 ~ checkConnectionWithRetry ~ res",
//       res
//     );
//     return res;
//   }
// };

// async function sleep(intervalInSecs) {
//   return new Promise((resolve) => {
//     let timer = setTimeout(() => {
//       console.log(
//         "🚀 ~ file: functions.js ~ line 27 ~ sleep ~ intervalInSecs",
//         intervalInSecs
//       );
//       clearTimeout(timer);
//       resolve();
//     }, intervalInSecs * 1000);
//   });
// }
