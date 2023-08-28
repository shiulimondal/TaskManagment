//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import SupplierCard from '../../Components/UserCard/SupplierCard';
import Modal from "react-native-modal";
import LanderCard from '../../Components/UserCard/LanderCard';
import SupplierModalCard from '../../Components/UserCard/SupplierModalCard';
import LanderModalCard from '../../Components/UserCard/LanderModalCard';

const { height, width } = Dimensions.get('window')
// create a component
const User = () => {
    const colors = useTheme()
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [isNextModalVisible, setNextModalVisible] = useState(false);
    const NexttoggleModal = () => {
        setNextModalVisible(!isNextModalVisible);
    };
    const supplierData = [
        {
            img: (require('../../Assets/images/supplier1.png')),
            name: 'Mira Lipshutz',
            occupation: 'Plumber',
            number: '123XXXXXX'
        },
        {
            img: (require('../../Assets/images/supplier1.png')),
            name: 'Mira Lipshutz',
            occupation: 'Plumber',
            number: '123XXXXXX'
        },
        {
            img: (require('../../Assets/images/supplier1.png')),
            name: 'Mira Lipshutz',
            occupation: 'Plumber',
            number: '123XXXXXX'
        }
    ]
    const landerData = [
        {
            img: (require('../../Assets/images/lander.png')),
            name: 'Mira Lipshutz',
            number: '123XXXXXX'
        },
        {
            img: (require('../../Assets/images/lander.png')),
            name: 'Mira Lipshutz',
            number: '123XXXXXX'
        },
        {
            img: (require('../../Assets/images/lander.png')),
            name: 'Mira Lipshutz',
            number: '123XXXXXX'
        }
    ]
    return (
        <Container>
            <ScreenHeader title='Users' showIcon={false} />
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
                        ...styles.Supplier_txt,
                        color: colors.primaryFontColor
                    }}>Supplier</Text>
                    <Text style={{
                        ...styles.Supplier_txt,
                        fontSize: moderateScale(12),
                        color: colors.secondaryFontColor
                    }}>See all</Text>
                </View>
                <View style={{
                    marginHorizontal: moderateScale(15),
                }}>
                    {
                        supplierData.map((item, index) => {
                            return (
                                <SupplierCard
                                    toggleModal={() => toggleModal()}
                                    item={item} key={index} />
                            )
                        })
                    }
                </View>


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: moderateScale(15),
                    marginHorizontal: moderateScale(15)
                }}>
                    <Text style={{
                        ...styles.Supplier_txt,
                        color: colors.primaryFontColor
                    }}>Lenders</Text>
                    <Text style={{
                        ...styles.Supplier_txt,
                        fontSize: moderateScale(12),
                        color: colors.secondaryFontColor
                    }}>See all</Text>
                </View>
                <View style={{
                    marginHorizontal: moderateScale(15),
                }}>
                    {
                        landerData.map((item, index) => {
                            return (
                                <LanderCard 
                                NexttoggleModal={() => NexttoggleModal()}
                                item={item} key={index} />
                            )
                        })
                    }
                </View>


            </ScrollView>
            <Modal
                isVisible={isModalVisible}
                style={{
                    justifyContent: 'center',
                    marginHorizontal: moderateScale(20),
                    marginBottom: moderateScale(50),
                    // backgroundColor: 'blue'
                }}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                

                    <SupplierModalCard />

            </Modal>

            <Modal
                isVisible={isNextModalVisible}
                style={{
                    justifyContent: 'center',
                    marginHorizontal: moderateScale(20),
                    marginBottom: moderateScale(50),
                    // backgroundColor: 'blue'
                }}
                onBackButtonPress={() => setNextModalVisible(false)}
                onBackdropPress={() => setNextModalVisible(false)}
            >
                

                    <LanderModalCard />

            </Modal>


        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    Supplier_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(15),
    }
});

//make this component available to the app
export default User;
