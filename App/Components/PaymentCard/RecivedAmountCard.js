//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { useTheme } from 'react-native-basic-elements';

// create a component
const RecivedAmountCard = ({item}) => {
    const colors = useTheme()
   
    return (
        <View style={{
           ...styles.main_view
        }}>
            <Text style={{
                ...styles.person_name,
                color: '#A7AEC1'
            }}>{item.name}</Text>
            <View>
                <Text style={{
                    ...styles.person_name,
                    color: '#575757'
                }}>£ {item.price}</Text>
                <Text style={{
                    ...styles.person_name,
                    fontSize:moderateScale(8),
                    color: '#A7AEC1'
                }}>{item.date}</Text>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view:{
        marginTop: moderateScale(15),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    person_name: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    }
});

//make this component available to the app
export default RecivedAmountCard;
