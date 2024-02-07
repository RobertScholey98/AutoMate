import React from 'react'
import { Button, Title, useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const TempNotifications = ({navigation}) => {

    return (
        <View>
            <Title>
                Chats / actionable notifications here
            </Title>
            <Button mode='contained' onPress={() => navigation.navigate('Mechanic Jim', {mechanic: 'Jim - Halfords Trowbridge', navigation: navigation})}>open chat with mechanic XYZ</Button>
        </View>
    )
}

const MechanicConversation = ({navigation, mechanic}) => {

    navigation.setOptions({title: mechanic});

    return (
        <View>
            <Text>
                Chat with Jim here
            </Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();

const Notifications = () => {
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
      
          <Stack.Screen name="Notifications" component={TempNotifications} />
          <Stack.Screen name="Mechanic Jim" component={MechanicConversation} />
        </Stack.Navigator>
    );
}

export default Notifications
