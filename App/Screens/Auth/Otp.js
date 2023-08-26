//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, useTheme, Text, AppButton } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import NavigationService from '../../Services/Navigation';

// create a component
const Otp = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader title='Verify your email' />
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

            <Text style={{
                ...styles.userEmail_txt,
                color: colors.boldTextColor
            }}>yourname@email.com</Text>
            <View style={{
                marginHorizontal: moderateScale(15),
                justifyContent: 'center',

            }}>
                <OTPInputView
                    style={{
                        height: moderateScale(75),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width: '105%',
                    }}
                    pinCount={4}
                    codeInputFieldStyle={{
                        ...styles.underlineStyleBase,
                        borderColor: colors.borderColor

                    }}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />
            </View>
            <Text style={{
                ...styles.resendOtp_txt,
                color: colors.buttonColor
            }}>Resend OTP 0:58 sec</Text>

            <View style={{ flex: 1 }} />
            <AppButton
                title="Verified Code"
                textStyle={{
                    ...styles.button_txt,
                    color: colors.primaryThemeColor
                }}
                style={{
                    ...styles.button_sty
                }}
                onPress={() => NavigationService.navigate('SetPassword')}
            />

            <AppButton
                title="Resend OTP"
                textStyle={{
                    ...styles.button_txt,
                    color: colors.primaryThemeColor
                }}
                style={{
                    ...styles.button_sty,
                    backgroundColor: '#BDBDBD'
                }}
                // onPress={() => NavigationService.navigate()}
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
        marginTop: moderateScale(30)
    },
    demo_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(15),
        maxWidth: '90%'
    },
    underlineStyleBase: {
        width: moderateScale(58),
        height: moderateScale(52),
        borderRadius: moderateScale(5),
        backgroundColor: "#FFFFFF",
        color: '#000000',
        elevation: 3,
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(16),
        marginHorizontal: moderateScale(10),
        borderWidth: 0
    },
    underlineStyleHighLighted: {
        backgroundColor: "#FFFFFF",
    },
    userEmail_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginTop: moderateScale(25),
        marginHorizontal: moderateScale(25)
    },
    resendOtp_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        textAlign: 'right',
        marginTop: moderateScale(5),
        textDecorationLine: 'underline'
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
        marginBottom: moderateScale(20)
    },
});

//make this component available to the app
export default Otp;
