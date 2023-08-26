//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppButton, AppTextInput, Container, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

// create a component
const SetPassword = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader title='Set your password' />
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

            <AppTextInput
                title='Type Password'
                titleStyle={{
                    ...styles.Email_id_txt,
                    marginLeft: moderateScale(0),
                    color: colors.primaryFontColor
                }}
                inputStyle={{
                    paddingHorizontal: moderateScale(10),
                }}
                mainContainerStyle={{
                    ...styles.textInput_main_container,
                    marginTop: moderateScale(30),
                }}
                inputContainerStyle={{
                    ...styles.inputContainer_sty,
                    backgroundColor: colors.secondaryThemeColor
                }}
                placeholder="Enter your password"

            />

            <AppTextInput
                title='Re-Type Password'
                titleStyle={{
                    ...styles.Email_id_txt,
                    marginLeft: moderateScale(0),
                    color: colors.primaryFontColor
                }}
                inputStyle={{
                    paddingHorizontal: moderateScale(10),
                }}
                mainContainerStyle={{
                    ...styles.textInput_main_container,
                    marginTop: moderateScale(15),
                }}
                inputContainerStyle={{
                    ...styles.inputContainer_sty,
                    backgroundColor: colors.secondaryThemeColor
                }}
                placeholder="Enter your password"

            />
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
                onPress={() => NavigationService.navigate('Login')}
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
    Email_id_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(15)
    },
    textInput_main_container: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
    },
    inputContainer_sty: {
        borderRadius: moderateScale(5),
        borderWidth: 0,
        elevation: 3,
        height: moderateScale(45)
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
export default SetPassword;
