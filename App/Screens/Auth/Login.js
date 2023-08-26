//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { AppButton, CheckBox, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const Login = () => {
    const colors = useTheme()
    const [text, onChangeText] = useState();
    const [passwordShow, setPasswordShow] = useState(true);
    const [check, setCheck] = useState(false);
    return (
        <Container>
            <StatusBar
                backgroundColor={colors.primaryThemeColor}
                barStyle={'dark-content'}
            />

            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >

                <Image
                    source={require('../../Assets/images/Logo.png')}
                    style={{
                        ...styles.logo_sty
                    }}
                />
                <Text style={{
                    ...styles.heading_txt,
                    color: colors.primaryFontColor
                }}>Login to your account</Text>


                <View style={{
                    marginTop: moderateScale(25)
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

                <View style={{
                    marginTop: moderateScale(15)
                }}>

                    <Text style={{
                        ...styles.Email_id_txt,
                        color: colors.primaryFontColor
                    }}>Password</Text>

                </View>

                <View
                    style={{
                        ...styles.inputBox_view,
                        backgroundColor: colors.primaryThemeColor
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '80%',
                            height: moderateScale(45)
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/password.png')}
                            resizeMode='contain'
                            style={{
                                height: moderateScale(20),
                                width: moderateScale(20)
                            }}
                        />

                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            style={{
                                ...styles.passward_placeholder_txt
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => setPasswordShow(!passwordShow)}
                        style={{
                            width: '20%',
                            height: moderateScale(45),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        {
                            passwordShow ? (
                                <Image
                                    source={require('../../Assets/images/password_hide.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: moderateScale(22),
                                        width: moderateScale(22),
                                        tintColor: '#666666'
                                    }}
                                />
                            ) : (
                                <Image
                                    source={require('../../Assets/images/password_visible.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: moderateScale(22),
                                        width: moderateScale(22),
                                        tintColor: '#666666'
                                    }}
                                />
                            )
                        }


                    </TouchableOpacity>

                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: moderateScale(15),
                    marginHorizontal: moderateScale(15),
                    alignItems: 'center'
                }}>
                    <CheckBox
                        checked={check}
                        onChange={(val) => setCheck(val)}
                        size={17}
                        activeColor={colors.buttonColor}
                        containerStyle={{ borderWidth: 1 }}
                    />
                    <View style={{
                        ...styles.checkbox_Txt_view
                    }}>
                        <Text style={{
                            ...styles.rember_txt,
                            color: colors.secondaryFontColor
                        }}>Remember Me</Text>

                        <Text
                            onPress={() => NavigationService.navigate('ForgetPassword')}
                            style={{
                                ...styles.rember_txt,
                                marginLeft: moderateScale(0),
                                color: colors.buttonColor
                            }}>Forgot Password?</Text>
                    </View>

                </View>

                <AppButton
                    title="Login"
                    textStyle={{
                        ...styles.button_txt,
                        color: colors.primaryThemeColor
                    }}
                    style={{
                        ...styles.button_sty
                    }}
                onPress={() => NavigationService.navigate('AppStack')}
                />

                <View style={
                    styles.line_txt_aline_view
                }>
                    <LinearGradient style={{
                        ...styles.gradient_line_style
                    }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['rgba(255, 255, 255, 1)', 'rgba(68, 68, 68, 1)']}
                    />
                    <Text style={{
                        ...styles.or_txt,
                        color: colors.primaryFontColor
                    }}>Or</Text>
                    <LinearGradient style={{
                        ...styles.gradient_line_style
                    }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['rgba(68, 68, 68, 1)', 'rgba(255, 255, 255, 1)']}
                    />
                </View>


                <View style={{
                    ...styles.facebook_img_view,
                }}>
                    <Image
                        source={require('../../Assets/images/facebook.png')}
                        style={{
                            ...styles.facebook_img,
                            marginLeft: moderateScale(15)
                        }}
                    />
                    <Text style={{
                        ...styles.facebook_txt,
                        color: colors.secondaryFontColor
                    }}>Continue With Facebook</Text>
                </View>


                <View style={{
                    ...styles.facebook_img_view,
                    marginTop: moderateScale(20)
                }}>
                    <Image
                        source={require('../../Assets/images/google.png')}
                        style={{
                            ...styles.facebook_img,
                        }}
                    />
                    <Text style={{
                        ...styles.facebook_txt,
                        color: colors.secondaryFontColor
                    }}>Continue With Google</Text>
                </View>

                <Text
                    onPress={() => NavigationService.navigate('Register')}
                    style={{
                        ...styles.facebook_txt,
                        textAlign: 'center',
                        marginTop: moderateScale(15),
                        marginBottom: moderateScale(20),
                        color: colors.primaryFontColor
                    }}> Don’ t hav e an account ? <Text style={{
                        color: colors.buttonColor
                    }}>Register Now</Text></Text>

            </KeyboardAwareScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    logo_sty: {
        resizeMode: 'contain',
        height: moderateScale(80),
        alignSelf: 'center',
        marginTop: moderateScale(60)
    },
    heading_txt: {
        textAlign: 'center',
        marginTop: moderateScale(20),
        fontFamily: FONTS.bold,
        fontSize: moderateScale(22)
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
    passward_placeholder_txt: {
        flex: 1,
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        alignSelf: 'center',
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
    },
    rember_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        marginLeft: moderateScale(7)
    },
    checkbox_Txt_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    button_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(17)
    },
    button_sty: {
        marginTop: moderateScale(30),
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        width: '92%',
        alignSelf: 'center'
    },
    line_txt_aline_view: {
        flexDirection: 'row',
        marginTop: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient_line_style: {
        borderWidth: 0,
        width: '40%',
        height: moderateScale(2)
    },
    or_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(10),
        bottom: moderateScale(2)
    },
    facebook_img_view: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebook_img: {
        height: moderateScale(35),
        width: moderateScale(35),
        marginRight: moderateScale(10)
    },
    facebook_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
    },
});

//make this component available to the app
export default Login;
