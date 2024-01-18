import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import SignInScreen from './src/screens/SignInScreen';
export default function App() {

  const isLoggedIn = false;

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <SignInScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
