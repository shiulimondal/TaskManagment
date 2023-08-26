//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
import { AppButton, Container, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const ForgetPassword = () => {
    const colors = useTheme()
    const [text, onChangeText] = useState();
    return (
        <Container>
            <BackHeader title='Recover your  Password' />

            <Image
                source={require('../../Assets/images/Logo.png')}
                style={{
                    ...styles.logo_sty
                }}
            />
            <Text style={{
                ...styles.demo_txt,
                color: colors.primaryFontColor
            }}>Lorem ipsum dolor sit amet consectetur. Feugiat aliquam elit blandit lectus.</Text>


            <View style={{
                marginTop: moderateScale(45)
            }}>

                <Text style={{
                    ...styles.Email_id_txt,
                    color: colors.primaryFontColor
                }}>Email id</Text>
                <View style={{
                    ...styles.inputBox_view,
                    backgroundColor: colors.primaryThemeColor
                }}>
                    <Image
                        source={require('../../Assets/images/email.png')}
                        style={{
                            height: moderateScale(20),
                            width: moderateScale(20)
                        }}
                    />
                    <TextInput
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='yourname@email.com'

                        style={{
                            ...styles.placeholder_txt,
                            color: colors.secondaryFontColor
                        }}
                        keyboardType='email-address'
                    />

                </View>
            </View>

            <View style={{ flex: 1 }} />
            <AppButton
                title="Send link"
                textStyle={{
                    ...styles.button_txt,
                    color: colors.primaryThemeColor
                }}
                style={{
                    ...styles.button_sty
                }}
            onPress={() => NavigationService.navigate('Otp')}
            />

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    logo_sty: {
        resizeMode: 'contain',
        height: moderateScale(80),
        alignSelf: 'center',
        marginTop: moderateScale(35)
    },
    demo_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(15),
        maxWidth: '90%'
    },
    Email_id_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(15)
    },
    inputBox_view: {
        borderRadius: moderateScale(5),
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        height: moderateScale(48),
        width: width - moderateScale(30),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        paddingHorizontal: moderateScale(5)
    },
    placeholder_txt: {
        paddingRight: moderateScale(10),
        paddingLeft: moderateScale(5),
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        alignSelf: 'center',
        width: '85%'
    },
    button_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(17)
    },
    button_sty: {
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        width: '92%',
        alignSelf: 'center',
        marginBottom:moderateScale(20)
    },
});

//make this component available to the app
export default ForgetPassword;
