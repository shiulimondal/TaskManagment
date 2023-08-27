//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Container, Icon, useTheme } from 'react-native-basic-elements';
import HomeHeader from '../../Components/Header/HomeHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import HomeCard from '../../Components/HomeCard/HomeCard';
import NavigationService from '../../Services/Navigation';

// create a component
const Home = () => {
    const colors = useTheme()
    const projectData = [
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
        {
            project: 'Construction Project Name',
            price: '10,000'
        },
    ]
    return (
        <Container>
            <HomeHeader />
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <View style={{
                marginHorizontal: moderateScale(15),
            }}>

                {
                    projectData.map((item, index)=>{
                        return(
                            <HomeCard item={item} keyi={index} />
                        )
                    })
                }
                {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    data={projectData}
                    renderItem={({ item, index }) => {
                        return <HomeCard item={item} index={index} />;
                    }}
                /> */}
            </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => NavigationService.navigate('AddProject')}
                style={{
                    ...styles.add_icon_button,
                    backgroundColor: '#FF9A6C'
                }}>
                <Icon
                    name='plus'
                    type='AntDesign'
                    size={45}
                    color={colors.primaryThemeColor}
                />
            </TouchableOpacity>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    add_icon_button: {
        height: moderateScale(55),
        width: moderateScale(55),
        borderRadius: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: moderateScale(20),
        bottom: moderateScale(55)
    },
});

//make this component available to the app
export default Home;
