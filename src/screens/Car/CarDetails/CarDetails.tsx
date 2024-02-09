import React, { useState } from 'react'
import { View, ScrollView, Image, ImageBackground, Touchable, TouchableWithoutFeedback, Animated } from 'react-native';
import { Title, Text, Surface, Card, ProgressBar, List, Button, TouchableRipple, useTheme, Icon, Chip, Divider } from 'react-native-paper';
import { Car } from '../../../Model/Cars';
import Collapsible from 'react-native-collapsible';
import dateDiff from '../../../util/date';
import LogMaintenance from '../../LogMaintenance';
import { lightBlue100, lightGreen100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

function getDueDate(mileage: number, predicted_mileage: number, nextInterval: number) {
    const dailyMileage = predicted_mileage / 365;
    const mileageLeft = nextInterval - mileage;
    const days = Math.ceil(mileageLeft / dailyMileage);
    return days;
}
function getProgress(mileage: number, predicted_mileage: number, interval: number, mileage_updated_at: Date) {
    let count = 0;
    let tempMileage = mileage
    while(tempMileage > interval) {
        count+=1;
        tempMileage -= interval
    }
    const lastDone = count*interval;
    const progress = (mileage - lastDone) / interval;
    const nextInterval = lastDone + interval;
    const daysSinceMileageUpdated = dateDiff(new Date(Date.now()), mileage_updated_at);
    const EstimatedMilesSinceUpdated = daysSinceMileageUpdated/365 * predicted_mileage;
    const dueMiles = nextInterval - mileage + EstimatedMilesSinceUpdated;
    const dueDays = dueMiles / predicted_mileage * 365;

    return { progress, nextInterval, dueMiles: Math.floor(dueMiles), dueDays: Math.floor(dueDays) };
}


const ServiceOverviewItem = ({serviceItem, mileage, predicted_mileage, mileage_updated_at, navigation}) => {
    const theme = useTheme();

    const [isCollapsed, setIsCollapsed] = useState(true);
    const {progress, nextInterval, dueMiles, dueDays} = getProgress(mileage, predicted_mileage, serviceItem.interval, mileage_updated_at)
    return (
        <View style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <TouchableWithoutFeedback onPress={() => setIsCollapsed(!isCollapsed)}>
                <Surface elevation={1} style={{width: '95%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 25}}>
                    <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%'}}>
                        <Text variant="titleMedium" style={{fontWeight: 'bold'}}>{serviceItem.job.name}</Text>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '95%', marginTop: 10}}>
                            <Chip compact={true} mode="outlined"><Text variant="bodyMedium">Due in: <Text variant="bodyLarge" style={{fontWeight: 'bold'}}>{dueMiles}</Text> miles or <Text variant="bodyLarge" style={{fontWeight: 'bold'}}>{dueDays}</Text> days</Text></Chip>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20}}>
                        <Button mode="contained"  onPress={() => {}}>Book service</Button>
                        <Button mode="outlined" onPress={() => navigation.navigate('LogMaintenance')}>Log maintenance</Button>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', width: '95%'}}>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 10}}>
                            <View style={{transform: [{rotate: isCollapsed ? '0deg' : '180deg'}]}}>
                                <Icon size={20} source="chevron-down" color={theme.colors.primary} />
                            </View>
                        </View>
                        <Collapsible collapsed={isCollapsed}>
                            <View>
                                <Text variant="bodySmall" style={{marginTop: 10}}>interval: {serviceItem.interval} miles</Text>
                                <ProgressBar progress={progress} style={{width: 300, height: 10, marginTop: 5, marginBottom: 10, borderRadius: 5}}/>
                            </View>
                        </Collapsible>
                    </View>
                </Surface>
            </TouchableWithoutFeedback>
        </View>
    )
}
const ServiceOverview = ({car, navigation}) => {
    const { service_intervals } = car.engine;
    const [isUpcomingCollapsed, setIsUpcomingCollapsed] = useState(false); 
    const [isServiceHistoryCollapsed, setIsServiceHistoryCollapsed] = useState(false);
    const theme = useTheme();
    return (
        <View style={{width: '100%', borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableWithoutFeedback onPress={() => setIsUpcomingCollapsed(!isUpcomingCollapsed)}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '70%'}}>
                    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Text variant="titleMedium" style={{fontWeight: 'bold', marginTop: 0}}>
                            Upcoming Maintenance
                        </Text>
                    </View>
                    
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 10}}>
                                    <View style={{transform: [{rotate: isUpcomingCollapsed ? '0deg' : '180deg'}]}}>
                                        <Icon size={40} source="chevron-down"  />
                                    </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Collapsible collapsed={isUpcomingCollapsed}>
                {service_intervals.map((serviceItem, index) => <ServiceOverviewItem key={index} serviceItem={serviceItem} mileage={car.mileage} predicted_mileage={car.predicted_yearly_mileage} mileage_updated_at={car.mileage_updated_at} navigation={navigation}/>)}
            </Collapsible>
            <TouchableWithoutFeedback onPress={() => setIsServiceHistoryCollapsed(!isServiceHistoryCollapsed)}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '70%', marginTop: 10}}>
                    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Text variant="titleMedium" style={{fontWeight: 'bold', marginTop: 0}}>
                            Service History
                        </Text>
                    </View>
                    
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 10}}>
                        <View style={{transform: [{rotate: isServiceHistoryCollapsed ? '0deg' : '180deg'}]}}>
                            <Icon size={40} source="chevron-down" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Collapsible collapsed={isServiceHistoryCollapsed}>
                <View>
                    <Text variant="bodySmall" style={{marginTop: 10}}>No service history</Text>
                </View>
            </Collapsible>
        </View>
    )
}

const CarDetails = ({route, navigation}) => {

    const car = route.params.car;
    navigation.setOptions({title: `${car.make} ${car.model} ${car.variant}`});
  return (
    <ScrollView>
        <Surface elevation={1} style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <ImageBackground style={{height: 200, width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex'}} source={{uri: car.imageUrl}}>
                <Surface elevation={3} style={{display: 'flex', width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2, backgroundColor: '#F7B500', borderRadius: 11}}>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, width: '100%', backgroundColor: '#F7B500', borderRadius: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 2}}>
                        <Text variant="titleLarge" style={{fontWeight: '800', letterSpacing: 1.1, textAlign: 'center'}}>{`${car.registration}`}</Text>
                    </View>
                </Surface>
            </ImageBackground>
            <View style={{padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Next service due: (TODO)</Text>
            </View>
        </Surface>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
           
            <Text variant="titleLarge" style={{fontWeight: '700'}}>{`${car.make} ${car.model} ${car.variant} ${car.engine.displacement}L`}</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%'}}>
                <Chip compact={true} mode="flat" elevated={false} style={{marginTop: 5, backgroundColor: '#BCE261', margin: 5}}>{`${car.year}`}</Chip>
                <Chip compact={true} mode="flat" elevated={false} style={{marginTop: 5, backgroundColor: '#BCE261', margin: 5}}>{`${car.mileage} miles`}</Chip>
            </View>
        </View>

        <Divider style={{width: '100%', marginTop: 10, marginBottom: 10}}/>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <ServiceOverview car={car} navigation={navigation}/>
        </View>
    </ScrollView>
  )
}

export default CarDetails;