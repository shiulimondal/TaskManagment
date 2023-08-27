//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { Card, Container, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import RecivedAmountCard from '../../Components/PaymentCard/RecivedAmountCard';

const { height, width } = Dimensions.get('screen')
// create a component
const Payment = () => {
    const colors = useTheme()

    const PaymentData = [
        {
            title: 'Payment Received',
            demoTxt: 'Lorem ipsum dolor sit amet consectetur',
            price: '30,000',
            backColor: '#04B600'
        },
        {
            title: 'Payment Due',
            demoTxt: 'Lorem ipsum dolor sit amet consectetur',
            price: '25,000',
            backColor: '#7F6DF0'
        }
    ]
    const PaymentReceiveData = [
        {
            name: 'John Moore',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Abhishek Ram',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Priyanka Ansari',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Abhishek Ram',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Amir Khan',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Artsiom Milevski',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Valeria López',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Ali Rashid',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Amir Khan',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Artsiom Milevski',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Valeria López',
            price: '500',
            date: '25 July,23'
        },
        {
            name: 'Ali Rashid',
            price: '500',
            date: '25 July,23'
        },
    ]
    return (
        <Container>
            <ScreenHeader title='Payments' showIcon={false} />

            <View style={{
                marginTop: moderateScale(15),
                marginHorizontal: moderateScale(15),
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                {
                    PaymentData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                shadow={false}
                                style={{
                                    ...styles.card_sty,
                                    backgroundColor: item.backColor
                                }}>
                                <Text style={{
                                    ...styles.Payment_receive_txt,
                                    color: colors.primaryThemeColor
                                }}>{item.title}</Text>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        ...styles.Payment_demo_txt,
                                        color: colors.primaryThemeColor
                                    }}>{item.demoTxt}</Text>
                                <Text style={{
                                    ...styles.Payment_txt,
                                    color: colors.primaryThemeColor
                                }}>£{item.price}</Text>

                                <View style={{
                                    ...styles.view_details_box,
                                    backgroundColor: 'rgba(255, 255, 255, 0.42)'
                                }}>
                                    <Text style={{
                                        ...styles.view_details_txt,
                                        color: colors.primaryThemeColor
                                    }}>View Details</Text>
                                </View>
                            </Card>
                        )
                    })
                }

            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: moderateScale(25),
                marginHorizontal: moderateScale(15),
                paddingBottom: moderateScale(7)
            }}>
                <Text style={{
                    ...styles.myProject_txt,
                    color: colors.primaryFontColor
                }}>Received from</Text>
                <Text style={{
                    ...styles.myProject_txt,
                    color: colors.primaryFontColor
                }}>Amount</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: moderateScale(20),
                    paddingBottom: moderateScale(20)
                }}
            >
                {
                    PaymentReceiveData.map((item, index) => {
                        return <RecivedAmountCard item={item} key={index} />
                    })
                }
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    card_sty: {
        borderRadius: moderateScale(5),
        width: (width - moderateScale(30)) / 2.05,
    },
    Payment_receive_txt: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(10)
    },
    Payment_demo_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(6.5),
        marginTop: moderateScale(5),
    },
    Payment_txt: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(18),
        marginTop: moderateScale(10)
    },
    view_details_box: {
        height: moderateScale(28),
        width: moderateScale(55),
        marginTop: moderateScale(10),
        borderRadius: moderateScale(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_details_txt: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(7),
    },
    myProject_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
    }
});

//make this component available to the app
export default Payment;
