import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
)
const SignInScreen = () => {
  return (
    <View>
      <DismissKeyboard>
        <View style={styles.container}>
          <Image source={require('../../../assets/automate_logo.png')} style={{ width: 250, height: 250 }}/>
          <CustomInput placeholder="Email"/>
          <CustomInput secureTextEntry={true} placeholder="Password"/>
          <View style={styles.buttons}>
            <CustomButton variant="secondary" title="Sign Up" onClick={() => {}}/>
            <CustomButton variant="primary" title="Sign In" onClick={() => {}}/>
          </View>
          <CustomButton variant="tertiary" title="Forgot Password" onClick={() => {}}/>
        </View>
      </DismissKeyboard>
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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '120%'
  }
})

export default SignInScreen