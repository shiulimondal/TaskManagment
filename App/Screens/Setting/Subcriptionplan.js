//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { AppButton, Card, CheckBox, Container, Icon, RadioButton, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const Subcriptionplan = () => {
    const colors = useTheme()
    const [select, setSelect] = useState(false)
    const [selected, setSelected] = useState(false);
    const [selectedweek, setSelectedweek] = useState(false);
    const planPiontsData = [
        {
            plan_text: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            plan_text: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            plan_text: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            plan_text: 'Lorem ipsum dolor sit amet consectetur. '
        },
    ]
    return (
        <Container>
            <ScreenHeader title='Subscription Plan' showIcon={true} />
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
            <Text style={{
                ...styles.Annual_Subscription_txt,
                color: colors.primaryFontColor
            }}>Annual Subscription</Text>

            <Card
                shadow={false}
                style={{
                    ...styles.card_sty,
                    backgroundColor: colors.primaryThemeColor,
                    borderColor: colors.borderColor
                }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: moderateScale(15)
                }}>
                    <Text style={{
                        ...styles.price_txt,
                        color: colors.boldTextColor
                    }}>£ 12<Text style={{
                        ...styles.price_txt,
                        fontSize: moderateScale(18),
                        color: colors.boldTextColor
                    }}> /monthly</Text></Text>

                    <Text style={{
                        ...styles.price_txt,
                        fontSize: moderateScale(16),
                        textDecorationLine: 'line-through',
                        color: colors.secondaryFontColor
                    }}>£ 16</Text>
                </View>
                <Text style={{
                    ...styles.save_txt,
                    color: colors.boldTextColor
                }}>Save 10%</Text>

                <Card style={{
                    ...styles.secondCard_sty,
                    backgroundColor: colors.buttonColor
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text style={{
                                ...styles.free_plan_txt,
                                color: colors.primaryThemeColor
                            }}>Try for free 1 month</Text>
                            <Text style={{
                                ...styles.free_plan_txt,
                                fontSize: moderateScale(12),
                                color: colors.primaryThemeColor
                            }}>£ 144/ Annually</Text>
                        </View>

                        <View style={{
                            ...styles.icon_view,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                            {
                                !select ?
                                    <Pressable
                                        onPress={() => setSelect(!select)}
                                    >
                                        <Icon
                                            name='right'
                                            type='AntDesign'
                                            size={14}
                                        />
                                    </Pressable>

                                    :
                                    <Pressable
                                        onPress={() => setSelect(!select)}
                                    >
                                        <Icon
                                            name='up'
                                            type='AntDesign'
                                            size={14}
                                        />
                                    </Pressable>
                            }


                        </View>
                    </View>

                    {
                        select ?
                            <View style={{
                                marginTop: moderateScale(10)
                            }}>
                                <Text
                                    numberOfLines={2}
                                    style={{
                                        ...styles.demo_txt,
                                        color: colors.primaryThemeColor
                                    }}>Lorem ipsum dolor sit amet consectetur. Fames vestibulum nisl tincidunt
                                    augue sed et nibh orci porttitor.</Text>

                                {
                                    planPiontsData.map((item, index) => {
                                        return (
                                            <View
                                                key={index}
                                                style={{
                                                    ...styles.check_box_view
                                                }}>
                                                <View style={{
                                                    ...styles.check_box,
                                                    borderColor: colors.primaryThemeColor
                                                }}>
                                                    <Icon
                                                        name='check'
                                                        type='AntDesign'
                                                        size={10}
                                                        color={colors.primaryThemeColor}
                                                    />
                                                </View>
                                                <Text style={{
                                                    ...styles.demo_txt,
                                                    marginTop: 0,
                                                    marginLeft: moderateScale(10),
                                                    color: colors.primaryThemeColor
                                                }}>{item.plan_text}</Text>
                                            </View>
                                        )
                                    })
                                }


                                <AppButton
                                    title="Buy now"
                                    textStyle={{
                                        ...styles.button_txt,
                                        color: colors.boldTextColor
                                    }}
                                    style={{
                                        ...styles.button_sty,
                                        backgroundColor: colors.primaryThemeColor
                                    }}
                                // onPress={() => NavigationService.navigate('AppStack')}
                                />
                            </View>
                            :
                            null
                    }


                </Card>
            </Card>


            <Card
                shadow={false}
                style={{
                    ...styles.card_sty,
                    marginBottom:moderateScale(20),
                    backgroundColor: colors.primaryThemeColor,
                    borderColor: colors.borderColor
                }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: moderateScale(15)
                }}>
                    <Text style={{
                        ...styles.price_txt,
                        color: colors.boldTextColor
                    }}>£ 12<Text style={{
                        ...styles.price_txt,
                        fontSize: moderateScale(18),
                        color: colors.boldTextColor
                    }}> /monthly</Text></Text>

                </View>

                <Text style={{
                    ...styles.save_txt,
                    color: colors.boldTextColor
                }}>Save 10%</Text>

                <Card style={{
                    ...styles.secondCard_sty,
                    backgroundColor: '#04B600'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text style={{
                                ...styles.free_plan_txt,
                                color: colors.primaryThemeColor
                            }}>Try for free 1 month</Text>
                            <Text style={{
                                ...styles.free_plan_txt,
                                fontSize: moderateScale(12),
                                color: colors.primaryThemeColor
                            }}>£ 144/ Annually</Text>
                        </View>

                        <View style={{
                            ...styles.icon_view,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                            {
                                !selectedweek ?
                                    <Pressable
                                        onPress={() => setSelectedweek(!selectedweek)}
                                    >
                                        <Icon
                                            name='right'
                                            type='AntDesign'
                                            size={14}
                                        />
                                    </Pressable>

                                    :
                                    <Pressable
                                        onPress={() => setSelectedweek(!selectedweek)}
                                    >
                                        <Icon
                                            name='up'
                                            type='AntDesign'
                                            size={14}
                                        />
                                    </Pressable>
                            }


                        </View>
                    </View>

                    {
                        selectedweek ?
                            <View style={{
                                marginTop: moderateScale(10)
                            }}>
                                <Text
                                    numberOfLines={2}
                                    style={{
                                        ...styles.demo_txt,
                                        color: colors.primaryThemeColor
                                    }}>Lorem ipsum dolor sit amet consectetur. Fames vestibulum nisl tincidunt
                                    augue sed et nibh orci porttitor.</Text>


                                {
                                    planPiontsData.map((item, index) => {
                                        return (
                                            <View
                                                key={index}
                                                style={{
                                                    ...styles.check_box_view
                                                }}>
                                                <View style={{
                                                    ...styles.check_box,
                                                    borderColor: colors.primaryThemeColor
                                                }}>
                                                    <Icon
                                                        name='check'
                                                        type='AntDesign'
                                                        size={10}
                                                        color={colors.primaryThemeColor}
                                                    />
                                                </View>
                                                <Text style={{
                                                    ...styles.demo_txt,
                                                    marginTop: 0,
                                                    marginLeft: moderateScale(10),
                                                    color: colors.primaryThemeColor
                                                }}>{item.plan_text}</Text>
                                            </View>
                                        )
                                    })
                                }

                                <AppButton
                                    title="Buy now"
                                    textStyle={{
                                        ...styles.button_txt,
                                        color: colors.boldTextColor
                                    }}
                                    style={{
                                        ...styles.button_sty,
                                        backgroundColor: colors.primaryThemeColor
                                    }}
                                // onPress={() => NavigationService.navigate('AppStack')}
                                />
                            </View>
                            :
                            null
                    }


                </Card>
            </Card>
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    Annual_Subscription_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginTop: moderateScale(15),
        marginHorizontal: moderateScale(15)
    },
    price_txt: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(25)
    },
    card_sty: {
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15),
        borderWidth: 1,
        paddingHorizontal: 0,
        paddingBottom: 0
    },
    secondCard_sty: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        marginTop: moderateScale(10)
    },
    free_plan_txt: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(9)
    },
    icon_view: {
        height: moderateScale(16),
        width: moderateScale(16),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    demo_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(9),
        maxWidth: '95%',
    },
    check_box: {
        height: moderateScale(14),
        width: moderateScale(14),
        borderWidth: 0.5,
        borderRadius: moderateScale(7),
        alignItems: 'center',
        justifyContent: 'center'
    },
    check_box_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(15)
    },
    button_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(10)
    },
    button_sty: {
        marginTop: moderateScale(30),
        height: moderateScale(35),
        borderRadius: moderateScale(5),
        width: '100%',
        alignSelf: 'center'
    },
    save_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(13),
        marginHorizontal: moderateScale(15)
    }
})

//make this component available to the app
export default Subcriptionplan;
