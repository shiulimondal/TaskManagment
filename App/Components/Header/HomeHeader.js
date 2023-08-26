//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
import { AppTextInput, Card, Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';


// create a component
const HomeHeader = ({ defaultButtons = true }) => {
    const colors = useTheme()
    const { userData, login_status } = useSelector(state => state.User);
    return (
        <Card style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.headerColor}
                barStyle='dark-content'
            />
            <View
                style={{
                    height: moderateScale(60),
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View style={{
                    ...styles.user_ciecle
                }}>
                    <Image
                        source={require('../../Assets/images/home_user.png')}
                        style={{
                            height: moderateScale(24),
                            width: moderateScale(24)
                        }}
                        resizeMode='contain'
                    />

                </View>

                <AppTextInput
                    placeholder="Search Projects"
                    inputStyle={{
                        paddingHorizontal: moderateScale(10),
                        fontFamily: FONTS.regular,
                        fontSize: moderateScale(12)
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer_sty,
                        backgroundColor: colors.secondaryThemeColor
                    }}
                    rightAction={<Icon
                        name='search1'
                        type='AntDesign'
                    />}
                />
                <TouchableOpacity
                    style={{
                        ...styles.iconButton,
                        backgroundColor: colors.primaryThemeColor
                    }}
                onPress={() => NavigationService.navigate('Notification')}
                >
                    <Image
                        source={require('../../Assets/images/notification.png')}
                        style={{
                            height: moderateScale(20),
                            width: moderateScale(20)
                        }}
                    />
                </TouchableOpacity>

            </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderRadius: 0,
        backgroundColor:'#fff',
        paddingHorizontal:0
    },
    user_ciecle: {
        height: moderateScale(38),
        width: moderateScale(38),
        borderRadius: moderateScale(19),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB'
    },
    inputContainer_sty: {
        borderRadius: moderateScale(0),
        borderWidth: 0,
        elevation: 0.5,
        height: moderateScale(55),
        width: moderateScale(235),
    },
    iconButton: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6
    }
});

//make this component available to the app
export default HomeHeader;
