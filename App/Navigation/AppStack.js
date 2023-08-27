//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import BottomTab from './BottomTab';
import AddProject from '../Screens/Home/AddProject';
import Notification from '../Screens/Home/Notification';
import Subcriptionplan from '../Screens/Setting/Subcriptionplan';
import Profile from '../Screens/Setting/Profile';


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
            {/* Home */}
            <Stack.Screen name="AddProject" component={AddProject} />
            <Stack.Screen name="Notification" component={Notification} />
            {/* setting */}
            <Stack.Screen name="Subcriptionplan" component={Subcriptionplan} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

export default AppStack;
