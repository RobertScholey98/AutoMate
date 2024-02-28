import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { customTheme } from './src/design/theme';
import Navigator from './src/navigation';

import SignInScreen from './src/screens/SignInScreen';
import Homescreen from './src/screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from './src/store/store';
import AppLoadedProvider from './src/Providers/HandshakeProvider';

export default function App() {

  const isLoggedIn = false;
  
  const DismissKeyboard = ({children}: any) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
  )


  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={customTheme}>
          <AppLoadedProvider>
            <DismissKeyboard>
              <NavigationContainer>
                <Navigator />
              </NavigationContainer>
            </DismissKeyboard>
          </AppLoadedProvider>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
}


