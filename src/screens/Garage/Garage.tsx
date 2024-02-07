import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { Button, Card, Text, TouchableRipple} from 'react-native-paper'
import { mockGarage } from '../../mocks/mocks'
import { Car } from '../../Model/Cars'
import CardTitle from 'react-native-paper/lib/typescript/components/Card/CardTitle'
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent'

const CarList = ({cars, navigation}) => {
    return (
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {
                cars.map((car, index) => <GarageCard navigation={navigation} car={car} key={index} />)
            }
        </View>
    )
}

const GarageCard = ({car, navigation}) => {
    return (
        <TouchableRipple
        onPress={() => navigation.navigate('CarDetails', {car: car})}
        rippleColor="rgba(0, 0, 0, .04)"
        borderless
        style={{margin: 0, width: '95%'}}
     >
        <Card style={{margin: 10, backgroundColor: 'white'}}>
           
                <Card.Cover source={{uri: car.imageUrl}} />
                <Card.Title titleVariant='titleLarge' subtitleVariant='labelLarge' title={car.make + ' ' + car.model + ' ' + car.variant} subtitle={car.registration} />
                
                <Card.Content >
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>Mileage: {car.mileage}</Text>
                        <Text>Year: {car.year}</Text>
                    </View>
                    
                </Card.Content>
                <Card.Actions>
                    <Button>Book</Button>
                    <Button onPress={() => navigation.navigate('CarDetails', {car: car})}>Details</Button>
                </Card.Actions>
                
        </Card>
        </TouchableRipple>
        
    )
}
const Garage = ({navigation}) => {
    
    //TODO get cars from backend
    const garageData = mockGarage;

  return (
    <ScrollView>
        <CarList navigation={navigation} cars={garageData.cars} />
    </ScrollView>
  )
}

export default Garage

