//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Onbording from '../Screens/Auth/Onbording';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import Otp from '../Screens/Auth/Otp';
import SetPassword from '../Screens/Auth/SetPassword';



const Stack = createStackNavigator();
// create a component
const AuthStack = () => {
    // const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            initialRouteName='Onbording'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >

            <Stack.Screen name="Onbording" component={Onbording} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="SetPassword" component={SetPassword} />
        </Stack.Navigator>
    );
};

export default AuthStack;
