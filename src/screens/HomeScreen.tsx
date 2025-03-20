import { Dimensions, StyleSheet, View } from 'react-native';
import { AppHeader }                    from "../Components/AppHeader/AppHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MatchTracker } from "../Components/MatchTracker/MatchTracker";
import { MatchFilter } from "../Components/MatchFilter/MatchFilter";
import { Button } from "../Components/Button/Button";

export const HomeScreen = () => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <View style={styles.static}>
        <View style={styles.header}>
          <AppHeader />
          <MatchFilter />
        </View>
        <Button />
      </View>
      <MatchTracker />
    </View>
  </SafeAreaProvider>
);

const { width } = Dimensions.get("window");
const isTablet = width > 600;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#06080C",
    padding: 16,
    maxWidth: "auto",
  },
  header: {
    display: "flex",
    flexDirection: isTablet ? "row" : "column",
  },
  static: {
    display: "flex",
    flexDirection: isTablet ? "row" : "column",
    justifyContent: "space-between",
  },
});
