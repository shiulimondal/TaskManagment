//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const MyProjectCard = () => {
    const colors = useTheme()
    return (
        <Card style={{
            padding: 0,
            borderTopRightRadius:moderateScale(15),
            
        }}>
            <View>
                <Image
                    source={require('../../Assets/images/project.png')}
                />
            </View>

        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyProjectCard;
