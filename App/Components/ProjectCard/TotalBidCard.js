//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { Card, Icon, useTheme } from 'react-native-basic-elements';

// create a component
const TotalBidCard = ({ item }) => {
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
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        ...styles.price_box,
                        backgroundColor: item.status == "Active" ? 'rgba(76, 217, 100, 0.22)' : 'rgba(217, 76, 76, 0.22)'
                    }}>
                        <Text style={{
                            ...styles.project_price,
                            color: item.status == "Active" ? '#00FF2B' : '#FF0000'
                        }}>{item.status}</Text>
                    </View>
                    <Icon
                    name='dots-three-vertical'
                    type='Entypo'
                    size={14}
                    color={colors.secondaryFontColor}
                    />
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
                        fontFamily: FONTS.semibold,
                        color: !showText ? colors.boldTextColor : '#fff'
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
                                fontFamily: FONTS.semibold,
                                color: colors.boldTextColor
                            }}>Show less</Text></Text>
                    :
                    null
            }

            <View style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            marginTop: moderateScale(15)
        }}>
             <Card
                shadow={false}
                style={{
                    ...styles.card_sty,
                    backgroundColor: '#F9F9F9'
                }}>
                <Image
                    source={require('../../Assets/images/bid_doc.png')}
                    style={{
                        height: moderateScale(10),
                        width: moderateScale(10)
                    }}
                />
                <Text style={{
                    ...styles.time_txt,
                    color: colors.cardColor
                }}>25 Total Bid</Text>
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
                    source={require('../../Assets/images/clock.png')}
                    style={{
                        height: moderateScale(10),
                        width: moderateScale(10)
                    }}
                />
                <Text style={{
                    ...styles.time_txt,
                    color: colors.cardColor
                }}>16 Hours  ago</Text>
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
        width: moderateScale(50),
        backgroundColor: '#94E8A2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(3),
        marginRight:moderateScale(5)
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
        marginRight:moderateScale(7)
    },
    time_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(7),
        marginLeft: moderateScale(5)
    }
});

//make this component available to the app
export default TotalBidCard;
