//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { Card, useTheme } from 'react-native-basic-elements';

// create a component
const NotificationSecondCard = ({ item }) => {
    const colors = useTheme()
    return (

        <Card
            shadow={false}
            style={{
                marginTop: moderateScale(15),
                flexDirection: 'row',
                backgroundColor: colors.primaryThemeColor,
            }}
        >
            <View style={{
                ...styles.img_circle_view,
                backgroundColor: item.circleColor,
            }}>
                <Image
                    source={require('../../Assets/images/notification_img2.png')}
                    style={{
                        height: moderateScale(26),
                        width: moderateScale(26)
                    }}
                />
            </View>
            <View style={{
                marginLeft: moderateScale(10)
            }}>
                <Text style={{
                    ...styles.title_txt,
                    color: colors.primaryFontColor
                }}>{item.title}</Text>
                <Text style={{
                    ...styles.payment_details_txt,
                    color: colors.secondaryFontColor
                }}>{item.details}</Text>
                <Text style={{
                    ...styles.payment_details_txt,
                    fontSize: moderateScale(10),
                    color: colors.secondaryFontColor
                }}>{item.date}</Text>


            </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    user_name: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(17)
    },
    payment_details_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        maxWidth: '90%',
        marginTop: moderateScale(3)
    },
    img_circle_view: {
        height: moderateScale(45),
        width: moderateScale(45),
        borderRadius: moderateScale(26),
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
    }
});

//make this component available to the app
export default NotificationSecondCard;
