import React from 'react'
import { SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Home from '../pages/home';
import HeroStackNavigator from './HeroStackNavigator';

const NavigatorContainer = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <HeroStackNavigator />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default NavigatorContainer;