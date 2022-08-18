import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spaceing } from './src/theme/spaceing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });
  if (!loaded) {
    return <Text>Font is Loading....</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: typography.bold, fontSize: spaceing[8] }}>
        Open up App.js to start working on your app!
      </Text>

      <Text style={{ marginTop: spaceing[4] }}>Hello Planet App</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
