import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Garage from '../Garage';
import CarDetails from '../Car/CarDetails';
import { useTheme } from 'react-native-paper';
import SettingsHome from './SettingsHome';
const Stack = createNativeStackNavigator();



const Settings = () => {
  const theme = useTheme();
    return (
        <Stack.Navigator 
          screenOptions={
            { 
              headerStyle: { backgroundColor: theme.colors.primary, height: 100 }, 
              headerTintColor: theme.colors.onPrimary, 
              headerTitleStyle: { fontSize: 20, color: theme.colors.onPrimary }
            }
          }
        >
      
          <Stack.Screen name="Settings" component={SettingsHome} />
          <Stack.Screen name="SomeSetting" component={CarDetails} />
        </Stack.Navigator>
    );
  };

export default Settings

const styles = StyleSheet.create({})