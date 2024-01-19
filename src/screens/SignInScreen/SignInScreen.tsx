import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { TextInput, Button, useTheme } from 'react-native-paper'


const SignInScreen = () => {

  const theme = useTheme();
  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.container}>
            <Image source={require('../../../assets/automate_logo.png')} style={{ width: 250, height: 250 }}/>
            <TextInput style={{minWidth: '100%'}} autoCorrect={false} keyboardType='email-address' autoCapitalize="none" label="Email" mode="outlined" placeholder="Email"/>
            <TextInput style={{minWidth: '100%'}} autoCorrect={false} autoCapitalize="none" label="Password" mode="outlined" secureTextEntry={true} placeholder="Password"/>
            <View style={styles.buttons}>
              <Button style={{width: '45%', height: 70}} contentStyle={{ height: 70 }} labelStyle={{fontSize: 20}} mode="contained" onPress={() => {}}>
                Sign up
              </Button>
              <Button style={{width: '45%', height: 70}} contentStyle={{ height: 70 }} labelStyle={{fontSize: 20}} mode="outlined" onPress={() => {}}>
                Sign in 
              </Button>
            </View>
              <Button compact style={{marginTop: 3}} mode="text" onPress={() => {}}>
              Forgot Password
            </Button>
          </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '75%',
    maxWidth: '75%',
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  }
})

export default SignInScreen