import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import SignInScreen from '../screens/SignInScreen';

export type StackParamList = {
    Garage: undefined;
    Notifications: undefined;
    Settings: undefined;
}

const SettingsScreen = () => <Text>Settings</Text>;

const Notifications = () => <Text>Notifications</Text>;

const Tab = createBottomTabNavigator<StackParamList>();

const Navigator = () => {

    const theme = useTheme();
    return (
            <Tab.Navigator initialRouteName="Garage"  screenOptions={{ headerStyle: { backgroundColor: theme.colors.primary, height: 100 }, headerTintColor: theme.colors.onPrimary, headerTitleStyle: { fontSize: 20, color: theme.colors.onPrimary } }}>
                <Tab.Screen name="Garage" component={Homescreen} />
                
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Notifications" component={Notifications} />
                <Tab.Screen name="Login" component={SignInScreen} />
            </Tab.Navigator>
    )
}

export default Navigator;