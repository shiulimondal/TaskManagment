//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import MyProjectCard from '../../Components/ProjectCard/MyProjectCard';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import TotalBidCard from '../../Components/ProjectCard/TotalBidCard';

// create a component
const Project = () => {
    const colors = useTheme()
    const projectData = [
        {
            img: (require('../../Assets/images/project_img.png')),
            progres: 'High',
            projectName: 'Construction Project Name',
            name: 'Michael Abraham',
            date: 'Jun 25, 2022',
            compleateTask: '15',
            task: '48',
            price: '5,00',
            totalPrice: '10,000',
            workPregress: ' 49%'
        },
        {
            img: (require('../../Assets/images/project_img1.png')),
            progres: 'High',
            projectName: 'Construction Project Name',
            name: 'Michael Abraham',
            date: 'Jun 25, 2022',
            compleateTask: '15',
            task: '48',
            price: '5,00',
            totalPrice: '10,000',
            workPregress: ' 49%'
        }
    ]
    const projectBidData = [
        {
            project: 'Construction Project Name',
            status:'Active',
        },
        {
            project: 'Construction Project Name',
            status:'Awarded'
        },
        {
            project: 'Construction Project Name',
            status:'Active',
        },
        {
            project: 'Construction Project Name',
            status:'Awarded'
        },
        {
            project: 'Construction Project Name',
            status:'Active',
        },
        {
            project: 'Construction Project Name',
            status:'Awarded'
        },
    ]
    return (
        <Container>
            <ScreenHeader title='All Projects' showIcon={false} />
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: moderateScale(15),
                marginHorizontal: moderateScale(15)
            }}>
                <Text style={{
                    ...styles.myProject_txt,
                    color: colors.primaryFontColor
                }}>My projects</Text>
                <Text style={{
                    ...styles.myProject_txt,
                    fontSize: moderateScale(12),
                    color: colors.secondaryFontColor
                }}>See all</Text>
            </View>

            <View style={{
                marginTop: moderateScale(20),
                marginLeft: moderateScale(15)
            }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        flexDirection: 'row',
                    }}
                >
                    {
                        projectData.map((item, index) => {
                            return (
                                <MyProjectCard item={item} key={index} />
                            )
                        })
                    }
                </ScrollView>

            </View>
            
            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: moderateScale(15),
                    marginHorizontal: moderateScale(15)
                }}>
                    <Text style={{
                        ...styles.myProject_txt,
                        color: colors.primaryFontColor
                    }}>Recently bidded project</Text>
                    <Text style={{
                        ...styles.myProject_txt,
                        fontSize: moderateScale(12),
                        color: colors.secondaryFontColor
                    }}>See all</Text>
                </View>

                <View style={{
                    marginHorizontal: moderateScale(15),
                    marginTop: moderateScale(15)
                }}>
                    {
                        projectBidData.map((item, index) => {
                            return (
                                <TotalBidCard item={item} key={index} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    myProject_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
    }
});

//make this component available to the app
export default Project;
