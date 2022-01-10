import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { SafeAreaView } from 'react-native';
import HeroDetail from '../pages/hero-detail';
import Home from '../pages/home';

const Stack = createStackNavigator()


const HeroStackNavigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}/>
                <Stack.Screen 
                name="Detail"
                component={HeroDetail}
                options={{
                    headerShown: true,
                  }}/>
            </Stack.Navigator>
    )
}

export default HeroStackNavigator;