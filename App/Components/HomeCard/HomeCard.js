//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const HomeCard = ({item}) => {
    const colors = useTheme()
    const [showText, setShowText] = useState(false)

    return (
        <Card style={{ backgroundColor: colors.primaryThemeColor, marginVertical: moderateScale(10) }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    ...styles.project_name,
                    color: colors.boldTextColor
                }}>{item.project}</Text>

                <View style={{
                    ...styles.price_box
                }}>
                    <Text style={{
                        ...styles.project_price,
                        color: colors.boldTextColor
                    }}>£{item.price}</Text>
                </View>
            </View>

            <Text
                numberOfLines={3}
                style={{
                    ...styles.demo_txt,
                    color: colors.secondaryFontColor
                }}>Lorem ipsum dolor sit amet consectetur. Fames vestibulum nisl tincidunt
                augue sed et nibh orci porttitor. Elementum ut ornare facilisis id vestibulum vulputate.
                <Text
                    onPress={() => setShowText(!showText)}
                    style={{
                        color: !showText ? colors.buttonColor : '#fff'
                    }}>Show more</Text></Text>

            {
                showText ?
                    <Text
                        style={{
                            ...styles.demo_txt,
                            marginTop: 0,
                            color: colors.secondaryFontColor
                        }}>Lorem ipsum dolor sit amet consectetur. Fames vestibulum nisl tincidunt
                        augue sed et nibh orci porttitor. Elementum ut ornare facilisis id vestibulum vulputate.
                        <Text
                            onPress={() => setShowText(!showText)}
                            style={{
                                color: colors.buttonColor
                            }}>Show less</Text></Text>
                    :
                    null
            }

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: moderateScale(15)
            }}>
                <Card
                    shadow={false}
                    style={{
                        ...styles.card_sty,
                        backgroundColor: '#F9F9F9'
                    }}>
                    <Image
                        source={require('../../Assets/images/clock.png')}
                        style={{
                            height: moderateScale(10),
                            width: moderateScale(10)
                        }}
                    />
                    <Text style={{
                        ...styles.time_txt,
                        color: colors.cardColor
                    }}>2 Hours  ago</Text>
                </Card>

                <Card
                    shadow={false}
                    style={{
                        ...styles.card_sty,
                        backgroundColor: '#F9F9F9'
                    }}>
                    <Image
                        source={require('../../Assets/images/link.png')}
                        style={{
                            height: moderateScale(10),
                            width: moderateScale(10)
                        }}
                    />
                    <Text style={{
                        ...styles.time_txt,
                        color: colors.cardColor
                    }}>Attachment 2</Text>
                </Card>

                <Card
                    shadow={false}
                    style={{
                        ...styles.card_sty,
                        backgroundColor: '#F9F9F9'
                    }}>
                    <Image
                        source={require('../../Assets/images/see_eye.png')}
                        style={{
                            height: moderateScale(10),
                            width: moderateScale(10)
                        }}
                    />
                    <Text style={{
                        ...styles.time_txt,
                        color: colors.cardColor
                    }}>25 people see this job</Text>
                </Card>

                <Card style={{
                    ...styles.card_sty,
                    backgroundColor: colors.buttonColor
                }}>
                    <Text style={{
                        ...styles.time_txt,
                        color: colors.primaryThemeColor
                    }}>Bid Now</Text>
                </Card>
            </View>

        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    project_name: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12)
    },
    project_price: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(8)
    },
    price_box: {
        height: moderateScale(20),
        width: moderateScale(55),
        backgroundColor: '#94E8A2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(3)
    },
    demo_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(8),
        marginTop: moderateScale(7)
    },
    card_sty: {
        flexDirection: 'row',
        padding: moderateScale(5),
        alignItems: 'center',
        borderRadius: moderateScale(6),
    },
    time_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(7),
        marginLeft: moderateScale(5)
    }
});

//make this component available to the app
export default HomeCard;
