//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, useTheme, Text, } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import * as Progress from 'react-native-progress';
// create a component
const MyProjectCard = ({item}) => {
    const colors = useTheme()
    const imageData = [
        { image: require('../../Assets/images/img1.png') },
        { image: require('../../Assets/images/img2.png') },
        { image: require('../../Assets/images/img3.png') },
    ];
  
    return (
        <Card style={{
            ...styles.card_sty,
            backgroundColor: colors.primaryThemeColor
        }}>
            <View>
                <Image
                    source={item?.img}
                    style={{
                        ...styles.img_sty
                    }}
                />
                <View style={{
                    ...styles.img_view
                }}>
                    <View style={{
                        ...styles.high_view
                    }}>
                        <Text style={{
                            ...styles.high_txt,
                            color: colors.primaryThemeColor
                        }}>{item.progres}</Text>
                    </View>
                </View>

            </View>
            <View style={{
                flexDirection: 'row',
                marginHorizontal: moderateScale(15),
                marginTop: moderateScale(10),
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View>
                    <Text style={{
                        ...styles.project_name,
                        color: colors.primaryFontColor
                    }}>{item.projectName}</Text>
                    <Text style={{
                        ...styles.person_name,
                        color: colors.secondaryFontColor
                    }}>{item.name} - <Text>{item.date}</Text></Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        width: (imageData.length + 1) * 15,
                        height: moderateScale(20),
                        overflow: 'hidden',
                        marginHorizontal:0,
                        left:10
                    }}>

                    {imageData.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    // height: moderateScale(20),
                                    // width: moderateScale(20),
                                    borderRadius: moderateScale(32),
                                    position: 'absolute',
                                    zIndex: index + 1,
                                    right: index * 15,
                                }}>
                                {imageData.length == index ? null : (
                                    <Image
                                        source={item?.image}
                                        style={{
                                            height: moderateScale(16),
                                            width: moderateScale(16),
                                            borderRadius: moderateScale(9),
                                            // marginLeft: 5
                                        }}
                                    />
                                )}
                            </View>
                        );
                    })}


                </View>

            </View>


            <View style={{
                marginHorizontal: moderateScale(15),
                marginTop: moderateScale(10)
            }}>
                <Progress.Bar progress={0.3} width={230}
                    color='#FF6D00'
                    backgroundColor='rgba(245, 245, 245, 1)'
                    borderWidth={0}
                />
                <View style={{
                    marginTop: moderateScale(14),
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        ...styles.compleate_task,
                        color: colors.boldTextColor
                    }}>{item.compleateTask} <Text style={{
                        ...styles.total_task_txt,
                        color: colors.cardColor
                    }}>/</Text>{item.task}<Text style={{
                        ...styles.total_task_txt,
                        color: colors.cardColor
                    }}> Total Tasks</Text></Text>

                    <Text style={{
                        ...styles.compleate_task,
                        fontSize: moderateScale(6),
                        color: colors.boldTextColor
                    }}>£{item.price}0<Text>/</Text><Text>£ {item.totalPrice}</Text> <Text style={{
                        ...styles.compleate_task,
                        fontSize: moderateScale(12),
                        color: colors.boldTextColor
                    }}> {item.workPregress}</Text></Text>
                </View>
            </View>

        </Card >
    );
};

// define your styles
const styles = StyleSheet.create({
    card_sty: {
        paddingTop: 0,
        paddingHorizontal: 0,
        borderTopRightRadius: moderateScale(15),
        borderTopLeftRadius: moderateScale(15),
        borderRadius: 0,
        width: '50%',
        marginRight:moderateScale(10)
    },
    img_sty: {
        height: moderateScale(70),
        width: '100%',
        borderTopRightRadius: moderateScale(15),
        borderTopLeftRadius: moderateScale(15),
        resizeMode: 'cover',
        position: 'absolute'
    },
    img_view: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: moderateScale(70),
        width: '100%',
        borderTopRightRadius: moderateScale(15),
        borderTopLeftRadius: moderateScale(15),
    },
    high_view: {
        height: moderateScale(18),
        width: moderateScale(36),
        borderRadius: moderateScale(2),
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        top: moderateScale(15),
        left: moderateScale(15)
    },
    high_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(10),
    },
    project_name: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(11),
    },
    person_name: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(9)
    },
    compleate_task: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(9)
    },
    total_task_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(9)
    }
});

//make this component available to the app
export default MyProjectCard;
