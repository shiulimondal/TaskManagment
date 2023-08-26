//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, VirtualizedList } from 'react-native';
import { AppButton, AppTextInput, CheckBox, Container, StatusBar, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const Register = () => {
    const colors = useTheme()
    const [text, onChangeText] = useState();
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
                }}>Create new account</Text>

                <View style={{
                    marginTop: moderateScale(25)
                }}>

                    <Text style={{
                        ...styles.Email_id_txt,
                        color: colors.primaryFontColor
                    }}>User Name</Text>
                    <View style={{
                        ...styles.inputBox_view,
                        backgroundColor: colors.primaryThemeColor
                    }}>
                        <Image
                            source={require('../../Assets/images/user.png')}
                            style={{
                                height: moderateScale(20),
                                width: moderateScale(20)
                            }}
                        />
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            placeholder='Type your user name'

                            style={{
                                ...styles.placeholder_txt,
                                color: colors.secondaryFontColor
                            }}
                        />

                    </View>
                </View>

                <View style={{
                    marginTop: moderateScale(15)
                }}>

                    <Text style={{
                        ...styles.Email_id_txt,
                        color: colors.primaryFontColor
                    }}>User Name</Text>
                    <View style={{
                        ...styles.inputBox_view,
                        backgroundColor: colors.primaryThemeColor
                    }}>
                        <Image
                            source={require('../../Assets/images/phone.png')}
                            style={{
                                height: moderateScale(20),
                                width: moderateScale(20)
                            }}
                        />
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            placeholder='Enter your phone number'

                            style={{
                                ...styles.placeholder_txt,
                                color: colors.secondaryFontColor
                            }}
                            keyboardType='number-pad'
                        />

                    </View>
                </View>

                <View style={{
                    marginTop: moderateScale(15)
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
                        marginTop: moderateScale(15),
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

                <AppButton
                    title="Register"
                    textStyle={{
                        ...styles.button_txt,
                        color: colors.primaryThemeColor
                    }}
                    style={{
                        ...styles.button_sty
                    }}
                    onPress={() => NavigationService.navigate('Login')}
                />
                <View style={{
                    alignItems: 'center',
                    marginTop: moderateScale(15),
                    marginBottom: moderateScale(20)
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <CheckBox
                            checked={check}
                            onChange={(val) => setCheck(val)}
                            size={17}
                            activeColor={colors.buttonColor}
                            containerStyle={{ borderWidth: 1 }}
                        />
                        <Text style={{
                            ...styles.termCondition_txt,
                            color: colors.primaryFontColor
                        }}>Agreed Our <Text style={{
                            color: colors.buttonColor
                        }}>Terms</Text> & <Text style={{
                            color: colors.buttonColor
                        }}>Condition</Text> Polcy</Text>
                    </View>

                    <Text
                        onPress={() => NavigationService.navigate('Login')}
                        style={{
                            ...styles.termCondition_txt,
                            marginTop: moderateScale(15),
                            color: colors.primaryFontColor
                        }}> Already Have an account? <Text style={{
                            color: colors.buttonColor
                        }}>Login</Text></Text>
                </View>


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
    inputContainer_sty: {
        borderRadius: moderateScale(5),
        borderWidth: 0,
        elevation: 3,
        height: moderateScale(45)
    },
    textInput_main_container: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
    },
    button_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(18)
    },
    button_sty: {
        marginTop: moderateScale(30),
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        width: '92%',
        alignSelf: 'center'
    },
    termCondition_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        marginLeft: moderateScale(7)
    },
});

//make this component available to the app
export default Register;
