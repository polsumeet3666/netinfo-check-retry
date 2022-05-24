import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
// import { checkConnection, checkConnectionWithRetry } from "./functions";

export const useNetInfoDetails = function () {
  const [attempt, setAttempt] = useState(3);
  const [connectStatus, setConnectionStatus] = useState(false);
  const MAX_RETRY = 3;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setConnectionStatus(state.isConnected);
      if (state.isConnected === false) {
        checkConnectionWithRetry(attempt, MAX_RETRY).then((res) => {
          console.log(res);
          if (res === false) {
            setAttempt(0);
          }
          setConnectionStatus(res);
        });
      } else {
        setAttempt(3);
      }
    });

    return () => {
      // To unsubscribe to these update, just use:
      unsubscribe();
    };
  });

  return [connectStatus,attempt];
};

const checkConnection = () => {
  return NetInfo.fetch().then((state) => {
    //return false;
    return state.isConnected;
    // console.log('Connection type', state.type);
    // console.log('Is connected?', state.isConnected);
  });
};

const checkConnectionWithRetry = async (attempt, max) => {
  console.log('calling');
  let res = await checkConnection();
  if (attempt > 0 && res === false) {
    console.log(
      "🚀 ~ file: functions.js ~ line 17 ~ checkConnectionWithRetry ~ attempt",
      attempt
    );
    await sleep(max - attempt);
    return res || (await checkConnectionWithRetry(--attempt, max));
  } else {
    console.log(
      "🚀 ~ file: functions.js ~ line 22 ~ checkConnectionWithRetry ~ res",
      res
    );
    return res;
  }
};

async function sleep(intervalInSecs) {
  return new Promise((resolve) => {
    let timer = setTimeout(() => {
      console.log(
        "🚀 ~ file: functions.js ~ line 27 ~ sleep ~ intervalInSecs",
        intervalInSecs
      );
      clearTimeout(timer);
      resolve();
    }, intervalInSecs * 1000);
  });
}
