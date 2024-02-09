import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { customTheme } from './src/design/theme';
import Navigator from './src/navigation';

import SignInScreen from './src/screens/SignInScreen';
import Homescreen from './src/screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';

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
        <NavigationContainer>
          
          <Navigator />
        </NavigationContainer>
      </DismissKeyboard>
    </PaperProvider>
  );
}


