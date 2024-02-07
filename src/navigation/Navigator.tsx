import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import Settings from '../screens/Settings';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import SignInScreen from '../screens/SignInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Notifications from '../screens/Notifications';

export type StackParamList = {
    Home: undefined;
    Notifications: undefined;
    Settings: undefined;
    Profile: undefined;
}


const Tab = createBottomTabNavigator<StackParamList>();

const Profile = () => <Text>Profile</Text>;
const Navigator = () => {

    const theme = useTheme();
    return (
            <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarActiveTintColor: theme.colors.primary }}>
                <Tab.Screen 
                    name="Home" 
                    component={Homescreen} 
                    options={{
                        tabBarLabel: 'Garage',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="garage" color={theme.colors.primary} size={size} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={Settings} 
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="cog" color={theme.colors.primary} size={size} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="Notifications" 
                    component={Notifications}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="bell" color={theme.colors.primary} size={size} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                          <FontAwesome5 name="user-alt" color={theme.colors.primary} size={size} />
                        ),
                      }}
                />
            </Tab.Navigator>
    )
}

export default Navigator;