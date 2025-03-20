import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { HomeScreen } from "./src/screens/HomeScreen";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#06080C",
  },
});
