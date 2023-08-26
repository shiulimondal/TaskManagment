//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import MyProjectCard from '../../Components/ProjectCard/MyProjectCard';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const Project = () => {
    const colors = useTheme()
    return (
        <Container>
            <ScreenHeader title='All Projects' showIcon={false} />

            <View style={{
                marginTop:moderateScale(20),
                marginHorizontal:moderateScale(15)
            }}>
                <MyProjectCard />
            </View>

        </Container>
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
export default Project;
