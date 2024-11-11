import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, Splash } from '../pages';

const Stack = createNativeStackNavigator()

const Routers = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'fade'
            }}
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default Routers