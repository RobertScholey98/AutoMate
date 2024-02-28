import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Garage from '../Garage';
import CarDetails from '../Car/CarDetails';
import { useTheme } from 'react-native-paper';
import LogMaintenance from '../LogMaintenance';

const Stack = createNativeStackNavigator();



const Homescreen = () => {
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
      
          <Stack.Screen name="Garage" component={Garage} />
          <Stack.Screen name="CarDetails" component={CarDetails} />
          <Stack.Screen name="logMaintenance" component={LogMaintenance} />
        </Stack.Navigator>
    );
  };

export default Homescreen

const styles = StyleSheet.create({})