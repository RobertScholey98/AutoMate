import { Button, ColorValue, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    variant: string,
    onClick: () => void
}
const CustomButton: React.FC<Props> = ({title, onClick, variant}) => {

  const getColor = (variant: string): ColorValue => {
    switch(variant){
        case "primary": 
            return 'white';
            break;
        case "secondary": 
            return 'white';
            break;
        case "tertiary": 
            return '#7c848c';
            break;
        default:
            return '#03384a';
    }
  }

  const getStyle = (variant: string): any => {
    switch(variant){
        case "primary":
            return styles.primary;
            break;
        case "secondary":
            return styles.secondary;
            break;
        case "tertiary":
            return styles.tertiary;
            break;
        default:
            return styles.primary;
    }
  }

  return (
    <Pressable onPress={onClick} style={{...getStyle(variant)}}>
      <Text style={{color: getColor(variant)}}>
        {title}
      </Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  
  primary: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#03384a',
  },
  secondary: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#3daac7',
    color: 'white',
  },
  tertiary: {
    textDecorationStyle: 'underline',
    textDecorationLine: 'underline',
    textDecorationColor: '#03384a',
    marginVertical: 10,
    color: 'black',
  }
})