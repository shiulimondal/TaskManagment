//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Container, Icon, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const Setting = () => {
    const colors = useTheme()
    const settingData = [
        {
            img: require('../../Assets/images/about.png'),
            name: 'About',
            handleClick: 'Adds',
            arrow: 'no',
        },
        {
            img: require('../../Assets/images/Help.png'),
            name: 'Help',
            handleClick: 'Wallet',
            arrow: 'no'
        },
        {
            img: require('../../Assets/images/Subscription.png'),
            name: 'Subscription',
            handleClick: 'Subcriptionplan',
            arrow: 'yes'
        },
        {
            img: require('../../Assets/images/FAQ.png'),
            name: 'FAQ',
            handleClick: 'Coupon',
            arrow: 'no'
        },
        {
            img: require('../../Assets/images/Terms.png'),
            name: 'Terms & Condition',
            handleClick: 'Coupon',
            arrow: 'no'
        },
        {
            img: require('../../Assets/images/logout.png'),
            name: 'Logout',
            handleClick: 'BuyItems',
            arrow: 'no'
        }
    ]

    return (
        <Container>
            <ScreenHeader title='Settings' showIcon={false} />

            <View style={{
                flexDirection: 'row',
                marginHorizontal: moderateScale(15),
                marginTop: moderateScale(15),
                alignItems: 'center'
            }}>
                <View>
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
                
                <View style={{
                    marginHorizontal: moderateScale(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1
                }}>
                    <View>
                        <Text style={{
                            ...styles.user_name,
                            color: colors.boldTextColor
                        }}>Jerremy Hage</Text>
                        <Text style={{
                            ...styles.user_email,
                            color: colors.boldTextColor
                        }}>jerremyhage@workmail.com</Text>
                    </View>
                    <TouchableOpacity 
                    onPress={()=> NavigationService.navigate('Profile')}
                    >
                        <Image
                            source={require('../../Assets/images/edit.png')}
                            style={{
                                height: moderateScale(18),
                                width: moderateScale(18)
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    ...styles.card,
                    backgroundColor: colors.secondaryThemeColor,

                }}
            >
                {
                    settingData.map((item, index) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    if (item.func) {
                                        item.handleClick()
                                    }
                                    else {
                                        NavigationService.navigate(item.handleClick)

                                    }
                                }}
                                style={{
                                    ...styles.horizontal_view,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode='contain'
                                        style={styles.icon_style}
                                    />
                                    <Text style={{
                                        ...styles.about_txt,
                                        color: item.name == "Logout" ? '#FF0000' : '#000000'
                                    }}>{item.name}</Text>
                                </View>

                                {
                                    item.arrow == 'yes' ?
                                        <Icon
                                            name='right'
                                            type='AntDesign'
                                            size={17}
                                        />
                                        :
                                        null
                                }


                            </Pressable>
                        )
                    })}

            </View>
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
        bottom: 2,
        right: -6
    },
    user_name: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(14)
    },
    user_email: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        marginTop: moderateScale(7)
    },
    about_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(10)
    },
    icon_style: {
        height: moderateScale(18),
        width: moderateScale(18)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(25),
        alignItems: 'center',
    }
});

//make this component available to the app
export default Setting;
