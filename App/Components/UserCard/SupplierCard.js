//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const SupplierCard = ({ item, toggleModal }) => {
    const colors = useTheme()
    return (
        <Card style={{
            ...styles.card_sty,
            backgroundColor: colors.primaryThemeColor
        }}>
            <Image
                source={item.img}
                style={{
                    height: moderateScale(52),
                    width: moderateScale(52),
                    borderRadius: moderateScale(26)
                }}
            />
            <View style={{
                marginLeft: moderateScale(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1
            }}>
                <View>
                    <Text style={{
                        ...styles.name_txt,
                        color: colors.boldTextColor
                    }}>{item.name}</Text>
                    <Text style={{
                        ...styles.occupation_txt,
                        color: colors.secondaryFontColor
                    }}>{item.occupation}</Text>
                    <Text style={{
                        ...styles.occupation_txt,
                        color: colors.secondaryFontColor
                    }}>Phone:  <Text>+01 {item.number}</Text></Text>
                </View>

                <TouchableOpacity
                    // onPress={() => {
                    //     toggleModal()
                    // }}
                    onPress={toggleModal}
                    style={{
                        ...styles.viewProfile_box,
                        backgroundColor: 'rgba(6, 109, 230, 0.1)'
                    }}>
                    <Text style={{
                        ...styles.viewProfile_txt,
                        color: colors.buttonColor
                    }}>View  profile</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    card_sty: {
        marginVertical: moderateScale(7),
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    name_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(13),
    },
    occupation_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
    },
    viewProfile_box: {
        height: moderateScale(30),
        width: moderateScale(80),
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewProfile_txt: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(11)
    }
});

//make this component available to the app
export default SupplierCard;
