import { StatusBar } from 'expo-status-bar';
import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import SignInScreen from './src/screens/SignInScreen';
import { customTheme } from './src/design/theme';
export default function App() {

  const isLoggedIn = false;
  
  const DismissKeyboard = ({children}: any) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
  )


  return (
    <PaperProvider theme={customTheme}>
      <DismissKeyboard>
        <SafeAreaView style={styles.container}>
            <SignInScreen />
        </SafeAreaView>
      </DismissKeyboard>
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
