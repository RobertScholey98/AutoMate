import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    placeholder: string,
    secureTextEntry?: boolean
}
const CustomInput: React.FC<Props> = ({placeholder, secureTextEntry = false}) => {
    

  return (
    <View style={styles.container}>
            <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      width: '100%',
      borderRadius: 5,
      marginVertical: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    
  }
})

export default CustomInput