//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Container, StatusBar, useTheme, Text, AppButton, } from 'react-native-basic-elements';
import Swiper from 'react-native-swiper';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('screen')
// create a component
const Onbording = () => {
    const colors = useTheme()
    const swiperRef = useRef(null)
    const swiperData = [
        {
            img: require('../../Assets/images/onbording1.png'),
            heading: 'Construction Project Bidding',
            sub_txt: ' The client evaluates bids and selects the most suitable contractor based on factors like price, experience, and expertise. Successful contractors negotiate terms and execute the project, adhering to the agreed-upon contract.'
        },
        {
            img: require('../../Assets/images/onbording2.png'),
            heading: 'Project Manage & Job creation',
            sub_txt: ' Effective project management involves coordinating tasks, resources, and stakeholders to minimize delays and issues. Additionally, construction projects often lead to job creation, providing employment opportunities for various skilled workers and boosting the local economy.'
        },
        {
            img: require('../../Assets/images/onbording3.png'),
            heading: 'Work update & Labor Manage',
            sub_txt: 'Construction work is embracing technology with BIM, drones, and automation for efficiency and accuracy. Skilled labor shortages persist, urging investments in training and development to upskill workers. Modular construction and sustainable practices are gaining traction for speed and eco-friendliness.'
        },

    ]
    return (
        <Container style={{
            ...styles.main_view,
            backgroundColor: colors.primaryThemeColor
        }}>
            <StatusBar
                backgroundColor={colors.primaryThemeColor}
                barStyle={'dark-content'}
            />
            <View
                style={{
                    flex: 1,
                }}
            >
                <Swiper
                    ref={swiperRef}
                    loop={true}
                    showsPagination={true}
                    removeClippedSubviews={false}
                    autoplay={true}
                    autoplayTimeout={3}
                    dotStyle={{
                        backgroundColor: colors.cardColor
                    }}
                >
                    {swiperData.map((item, index) => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}
                                key={index}
                            >

                                <Image
                                    source={item?.img}
                                    resizeMode='contain'
                                    style={{
                                        ...styles.img_style
                                    }}
                                />

                                <Text style={{
                                    ...styles.heading_txt,
                                    color: colors.primaryFontColor
                                }}>{item.heading}</Text>

                                <Text
                                    style={{
                                        ...styles.sub_txt,
                                        color: colors.primaryFontColor
                                    }}
                                >{item.sub_txt}</Text>
                            </View>
                        )
                    })}
                </Swiper>
            </View>

            <AppButton
                title="Next"
                textStyle={{
                    ...styles.button_txt,
                    color: colors.primaryThemeColor
                }}
                style={{
                    height: moderateScale(45),
                    borderRadius:moderateScale(5)
                }}
                onPress={() => NavigationService.navigate('Login')}
            />


        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        padding: moderateScale(15),
        flex: 1
    },
    img_style: {
        height: moderateScale(330),
        alignSelf: 'center',
        width: moderateScale(330)
    },
    heading_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(20),
        textAlign: 'center',
        // textTransform: 'capitalize',
        // maxWidth: '80%',
        marginTop: moderateScale(25)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        textAlign: 'center',
        textTransform: 'capitalize',
        maxWidth: '85%',
        marginTop: moderateScale(15)
    },
    button_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(17)
    }
});

//make this component available to the app
export default Onbording;
