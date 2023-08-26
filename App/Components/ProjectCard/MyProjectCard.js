//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const MyProjectCard = () => {
    const colors = useTheme()
    return (
        <Card style={{
            paddingTop: 0,
            paddingHorizontal: 0,
            borderTopRightRadius: moderateScale(15),
            borderTopLeftRadius: moderateScale(15)
        }}>
            <View>
                <Image
                    source={require('../../Assets/images/project.png')}
                    style={{
                        ...styles.img_sty
                    }}
                />
                <View style={{
                    ...styles.img_view
                }}>
                    <View style={{
                        ...styles.high_view
                    }}>
                        <Text style={{
                            ...styles.high_txt,
                            color: colors.primaryThemeColor
                        }}>High</Text>
                    </View>
                </View>

            </View>


        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    img_sty: {
        height: moderateScale(100),
        width: '100%',
        borderTopRightRadius: moderateScale(15),
        borderTopLeftRadius: moderateScale(15),
        resizeMode: 'cover',
        position: 'absolute'
    },
    img_view: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: moderateScale(100),
        width: '100%',
        borderTopRightRadius: moderateScale(15),
        borderTopLeftRadius: moderateScale(15),
    },
    high_view: {
        height: moderateScale(18),
        width: moderateScale(36),
        borderRadius: moderateScale(2),
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        top: moderateScale(15),
        left: moderateScale(15)
    },
    high_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(10),
    }
});

//make this component available to the app
export default MyProjectCard;
