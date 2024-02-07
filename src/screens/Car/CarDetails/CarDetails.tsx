import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import { Title } from 'react-native-paper';

const CarDetails = ({route, navigation}) => {

    const car = route.params.car;
    navigation.setOptions({title: `${car.make} ${car.model} ${car.variant}`});
  return (
    <ScrollView >
        <View>
            <Image source={{uri: car.imageUrl}} style={{width: '100%', height: 200}}/>
        </View>
      <Title>{`${car.make} ${car.model}`}</Title>
    </ScrollView>
  )
}

export default CarDetails;