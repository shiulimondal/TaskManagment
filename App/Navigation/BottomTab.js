//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio, SafeAreaView, Image } from 'react-native';
import { useSelector } from 'react-redux';
// import Icon, { IconType } from '../Components/Icon';
import { COLORS } from '../Constants/Colors';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import Home from '../Screens/Home/Home';
import Project from '../Screens/Project/Project';
import Payment from '../Screens/Payment/Payment';
import Setting from '../Screens/Setting/Setting';
import User from '../Screens/User/User';
import { Icon, useTheme } from 'react-native-basic-elements';

const Tab = createBottomTabNavigator();
// create a component
const BottomTab = () => {
    const colors = useTheme()
    const { userData, login_status } = useSelector(state => state.User);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.buttonColor,
                tabBarLabelStyle: { padding: moderateScale(5), fontFamily: FONTS.medium, fontSize: 10 },
                tabBarStyle: { height: moderateScale(60) },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) =>
                        focused ? (
                            <Image
                                style={{ height: moderateScale(21), width: moderateScale(23) }}
                                source={require('../Assets/images/homeColor.png')}
                            />
                        ) : (
                            <Image
                            style={{ height: moderateScale(21), width: moderateScale(23) }}
                                source={require('../Assets/images/home1.png')}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Project"
                component={Project}
                options={{
                    tabBarLabel: 'Project',
                    tabBarIcon: ({ color, size, focused }) =>
                        focused ? (
                            <Image
                                style={{ height: moderateScale(19.5), width: moderateScale(19) }}
                                source={require('../Assets/images/projectColor.png')}
                            />
                        ) : (
                            <Image
                                style={{ height: moderateScale(19.5), width: moderateScale(19) }}
                                source={require('../Assets/images/project1.png')}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Payment"
                component={Payment}
                options={{
                    tabBarLabel: 'Payment',
                    tabBarIcon: ({ color, size, focused }) =>
                        focused ? (
                            <Image
                                style={{ height: moderateScale(19), width: moderateScale(26) }}
                                source={require('../Assets/images/paymentColor.png')}
                            />
                        ) : (
                            <Image
                            style={{ height: moderateScale(19), width: moderateScale(26) }}
                                source={require('../Assets/images/payment1.png')}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size, focused }) =>
                        focused ? (
                            <Image
                                style={{ height: moderateScale(22.5), width: moderateScale(18) }}
                                source={require('../Assets/images/userColor.png')}
                            />
                        ) : (
                            <Image
                            style={{ height: moderateScale(22.5), width: moderateScale(18) }}
                                source={require('../Assets/images/user1.png')}
                            />
                        ),
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size, focused }) =>
                        focused ? (
                            <Image
                                style={{ height: moderateScale(22), width: moderateScale(22) }}
                                source={require('../Assets/images/settingColor.png')}
                            />
                        ) : (
                            <Image
                                style={{ height: moderateScale(22), width: moderateScale(22) }}
                                source={require('../Assets/images/setting1.png')}
                            />
                        ),
                }}
            />
        </Tab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BottomTab;
