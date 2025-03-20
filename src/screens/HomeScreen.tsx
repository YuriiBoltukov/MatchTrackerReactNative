import { StyleSheet, View } from 'react-native';
import { AppHeader }        from '../Components/AppHeader/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MatchTracker } from '../Components/MatchTracker/MatchTracker';
import { MatchFilter }  from '../Components/MatchFilter/MatchFilter';
import { Button }           from '../Components/Button/Button';

export const HomeScreen = () => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <AppHeader />
      <MatchFilter />
      <Button />
      <MatchTracker />
    </View>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06080C',
    padding: 16,
  }
});