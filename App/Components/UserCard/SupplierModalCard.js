//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { Card, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const SupplierModalCard = () => {
    const colors = useTheme()
    return (
        <Card style={{
            backgroundColor:colors.primaryThemeColor,
            padding:moderateScale(20)
        }}>
            <Image
                source={require('../../Assets/images/supplier1.png')}
                style={{
                    ...styles.img_sty
                }}
            />

            <View style={{
                flexDirection: 'row',
            }}>
                <View>
                    <Text style={{
                        ...styles.name_txt,
                        color: colors.boldTextColor
                    }}
                    >Name</Text>
                    <Text style={{
                        ...styles.name_txt,
                        color: colors.boldTextColor
                    }}
                    >Phone Number</Text>
                    <Text style={{
                        ...styles.name_txt,
                        color: colors.boldTextColor
                    }}
                    >Supply Type</Text>
                    <Text style={{
                        ...styles.name_txt,
                        color: colors.boldTextColor
                    }}
                    >Email Address</Text>
                    <Text style={{
                        ...styles.name_txt,
                        color: colors.boldTextColor
                    }}
                    >Physical Address</Text>
                </View>
                <View style={{
                    marginLeft:moderateScale(5)
                }}>
                    <Text style={{
                        ...styles.user_name_txt,
                        color: colors.secondaryFontColor
                    }}>: Mira lipshutz</Text>
                    <Text style={{
                        ...styles.user_name_txt,
                        color: colors.secondaryFontColor
                    }}>: +44 123 123 1234</Text>
                    <Text style={{
                        ...styles.user_name_txt,
                        color: colors.secondaryFontColor
                    }}>: Plumber</Text>
                    <Text style={{
                        ...styles.user_name_txt,
                        color: colors.secondaryFontColor
                    }}>:  abcd@gmail.com</Text>
                    <Text style={{
                        ...styles.user_name_txt,
                        maxWidth:'80%',
                        marginTop:moderateScale(23),
                        color: colors.secondaryFontColor
                    }}>: 45 Prince Consort Road, Kemback, Zip Code: KY15 1SJ, United Kingdom.</Text>
                </View>
            </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    img_sty: {
        height: moderateScale(70),
        width: moderateScale(70),
        alignSelf: 'center',
        borderRadius: moderateScale(35)
    },
    name_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(12),
        marginTop:moderateScale(10)
    },
    user_name_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(10),
        marginTop:moderateScale(10)
    }
});

//make this component available to the app
export default SupplierModalCard;
