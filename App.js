import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {useNetInfoDetails} from './useNetinfoDetails'
export default function App() {

  let [connectStatus,attempt] = useNetInfoDetails();
  return (
    <View style={styles.container}>
      <Text>{connectStatus ? "Connected" : "Not Connected"}</Text>
      <Text>{+attempt == 0 ? "Retry exhausted" : ":-D"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
