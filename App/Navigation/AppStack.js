//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import BottomTab from './BottomTab';
import AddProject from '../Screens/Home/AddProject';
import Notification from '../Screens/Home/Notification';


const Stack = createStackNavigator();
// create a component
const AppStack = () => {
    const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            initialRouteName='BottomTab'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="AddProject" component={AddProject} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    );
};

export default AppStack;
