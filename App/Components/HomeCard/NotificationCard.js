//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const NotificationCard = ({ item }) => {
    const colors = useTheme()
    return (
        <Card
            shadow={false}
            style={{
                marginVertical: moderateScale(10),
                flexDirection: 'row',
                backgroundColor: colors.primaryThemeColor,
            }}>
            <Image
                source={item?.img}
                style={{
                    height: moderateScale(45),
                    width: moderateScale(45),
                    borderWidth: moderateScale(26)
                }}
            />
            <View style={{
                marginLeft: moderateScale(10)
            }}>
                <Text style={{
                    ...styles.user_name,
                    color: colors.primaryFontColor
                }}>{item.name}</Text>
                <Text style={{
                    ...styles.payment_details_txt,
                    color: colors.secondaryFontColor
                }}>{item.details}</Text>
                <Text style={{
                    ...styles.payment_details_txt,
                    fontSize: moderateScale(10),
                    color: colors.secondaryFontColor
                }}>{item.date}</Text>

                <Text style={{
                    ...styles.payment_details_txt,
                    marginTop: moderateScale(7),
                    color: item.color
                }}>{item.status}</Text>
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
        borderRadius: moderateScale(23),
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
    }
});

//make this component available to the app
export default NotificationCard;
