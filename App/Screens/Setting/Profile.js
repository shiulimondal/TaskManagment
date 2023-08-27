//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height, width } = Dimensions.get('window')
// create a component
const Profile = () => {
    const colors = useTheme()
    const [text, onChangeText] = useState();
    return (
        <Container>
            <ScreenHeader title='Profile' showIcon={true} />

            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={{
                    alignItems: 'center',
                    marginTop: moderateScale(20)
                }}>
                    <View style={{
                        ...styles.user_circle,
                        backgroundColor: "#D9D9D9"
                    }}>
                        <Image
                            source={require('../../Assets/images/home_user.png')}
                            style={{
                                height: moderateScale(40),
                                width: moderateScale(40)
                            }}
                        />
                        <View style={{
                            ...styles.camera_circle,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                            <Image
                                source={require('../../Assets/images/camera.png')}
                                style={{
                                    height: moderateScale(13),
                                    width: moderateScale(14.5)
                                }}
                            />
                        </View>
                    </View>
                </View>

                <Text style={{
                    ...styles.upload_txt,
                    color: colors.boldTextColor
                }}>Update Profile picture</Text>

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
                    }}>Phone Number</Text>
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
                    title='Address'
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
                    placeholder="Type your Address"
                    rightAction={<Icon
                        name='location'
                        type='EvilIcon'
                    />}

                />

                <AppTextInput
                    title='Postal code'
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
                    placeholder="Type your postal code"
                    keyboardType='number-pad'
                />


                <AppButton
                    title="Save"
                    textStyle={{
                        ...styles.button_txt,
                        color: colors.primaryThemeColor
                    }}
                    style={{
                        ...styles.button_sty
                    }}
                    onPress={() => NavigationService.navigate('Login')}
                />
            </KeyboardAwareScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    user_circle: {
        height: moderateScale(70),
        width: moderateScale(70),
        borderRadius: moderateScale(35),
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera_circle: {
        height: moderateScale(26),
        width: moderateScale(26),
        borderRadius: moderateScale(13),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -15,
    },
    upload_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginTop: moderateScale(20),
        textAlign: 'center'
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
        alignSelf: 'center',
        marginBottom:moderateScale(20)
    },
});

//make this component available to the app
export default Profile;
