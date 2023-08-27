//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import NotificationCard from '../../Components/HomeCard/NotificationCard';
import { moderateScale } from '../../Constants/PixelRatio';
import NotificationSecondCard from '../../Components/HomeCard/NotificationSecodCard';
import { ReactReduxContext } from 'react-redux';

// create a component
const Notification = () => {
    const colors = useTheme()
    const notificationData = [
        {
            img: (require('../../Assets/images/notification_img.png')),
            name: 'Jerremy Hage',
            details: 'You have requested a partial payment  of £200 for Project Name 1',
            date: 'Jun 23, 2023 at 21:22 Pm',
            status: 'Waiting for Response',
            color: '#FF6D00',
        },
        {
            img: (require('../../Assets/images/notification_img.png')),
            name: 'Jerremy Hage',
            details: 'You have requested a partial payment  of £200 for Project Name 1',
            date: 'Jun 23, 2023 at 21:22 Pm',
            status: 'Rejected',
            color: '#FF0000'
        },
        {
            img: (require('../../Assets/images/notification_img.png')),
            name: 'Jerremy Hage',
            details: 'You have requested a partial payment  of £200 for Project Name 1',
            date: 'Jun 23, 2023 at 21:22 Pm',
            status: 'Accepted',
            color: '#04B600'
        },
    ]

    const secondnotificationData = [
        {
            circleColor: '#7F6DF0',
            title: 'Lorem ipsum dolor sit amet',
            details: 'Lorem ipsum dolor sit amet consectetur.',
            date: 'Jun 23, 2023 at 21:22 Pm'
        },
        {
            circleColor: '#B66DF0',
            title: 'Lorem ipsum dolor sit amet',
            details: 'Lorem ipsum dolor sit amet consectetur.',
            date: 'Jun 23, 2023 at 21:22 Pm'
        },
    ]
    return (
        <Container>
            <ScreenHeader title=' All Notifications' showIcon={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    marginHorizontal: moderateScale(15)
                }}>
                    {
                        notificationData.map((item, index) => {
                            return (
                                <NotificationCard item={item} key={index} />
                            )
                        })
                    }
                </View>

                <View style={{
                    marginHorizontal: moderateScale(15),
                    marginBottom: moderateScale(20)
                }}>
                    {
                        secondnotificationData.map((item, index) => {
                            return (
                                <NotificationSecondCard item={item} key={index} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </Container>
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
export default Notification;
