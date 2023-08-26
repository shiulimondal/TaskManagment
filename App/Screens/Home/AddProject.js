//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, useTheme } from 'react-native-basic-elements';
import ScreenHeader from '../../Components/Header/ScreenHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// create a component
const AddProject = () => {
    const colors = useTheme()
    const [text, onChangeText] = useState();
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);

    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true);
    };

    const hideStartDatePicker = () => {
        setStartDatePickerVisibility(false);
    };

    const StartDatehandleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideStartDatePicker();
    };

    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

    const showEndDatePicker = () => {
        setEndDatePickerVisibility(true);
    };

    const hideEndDatePicker = () => {
        setEndDatePickerVisibility(false);
    };

    const EndDatehandleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideEndDatePicker();
    };

    return (
        <Container>
            <ScreenHeader title='Add Projects' showIcon={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <AppTextInput
                    title='Project name'
                    titleStyle={{
                        ...styles.Email_id_txt,
                        marginLeft: moderateScale(0),
                        color: colors.primaryFontColor
                    }}
                    inputStyle={{
                        paddingHorizontal: moderateScale(10),
                    }}
                    mainContainerStyle={{
                        ...styles.textInput_main_container,
                        marginTop: moderateScale(30),
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer_sty,
                        backgroundColor: colors.secondaryThemeColor
                    }}
                    placeholder="Type your project name"

                />
                <AppTextInput
                    numberOfLines={6}
                    multiline={true}
                    title='Description'
                    titleStyle={{
                        ...styles.Email_id_txt,
                        marginLeft: moderateScale(0),
                        color: colors.primaryFontColor
                    }}
                    inputStyle={{
                        textAlignVertical: 'top',
                        paddingHorizontal: moderateScale(10),

                    }}
                    mainContainerStyle={{
                        marginHorizontal: moderateScale(15),
                        marginTop: moderateScale(15)
                    }}
                    inputContainerStyle={{
                        borderRadius: moderateScale(5),
                        borderWidth: 0,
                        elevation: 3,
                        backgroundColor: '#fff'
                    }}
                    placeholder="About the project"

                />
                <Text style={{
                    ...styles.Duration_txt,
                    color: colors.primaryFontColor
                }}>Duration</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: moderateScale(15),
                    marginTop: moderateScale(7)
                }}>
                    <View>

                        <View style={{
                            ...styles.textInput_view
                        }}>
                            <TouchableOpacity
                                onPress={showStartDatePicker}
                            >
                                <Image
                                    source={require('../../Assets/images/calender.png')}
                                    style={{
                                        height: moderateScale(15),
                                        width: moderateScale(16),
                                    }}
                                />
                            </TouchableOpacity>

                            <DateTimePickerModal
                                isVisible={isStartDatePickerVisible}
                                mode="date"
                                onConfirm={StartDatehandleConfirm}
                                onCancel={hideStartDatePicker}
                            />
                            <TextInput
                                onChangeText={onChangeText}
                                value={text}
                                style={{
                                    ...styles.text_input_sty
                                }}
                                placeholder='Start date'
                            />

                        </View>
                    </View>

                    <View>

                        <View style={{
                            ...styles.textInput_view
                        }}>
                            <TouchableOpacity
                                onPress={showEndDatePicker}
                            >
                                <Image
                                    source={require('../../Assets/images/calender.png')}
                                    style={{
                                        height: moderateScale(15),
                                        width: moderateScale(16),
                                    }}
                                />
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isEndDatePickerVisible}
                                mode="date"
                                onConfirm={EndDatehandleConfirm}
                                onCancel={hideEndDatePicker}
                            />
                            <TextInput
                                onChangeText={onChangeText}
                                value={text}
                                style={{
                                    ...styles.text_input_sty
                                }}
                                placeholder='End date'
                            />

                        </View>
                    </View>
                </View>

                <AppTextInput
                    title='Project Cost'
                    titleStyle={{
                        ...styles.Email_id_txt,
                        marginLeft: moderateScale(0),
                        color: colors.primaryFontColor
                    }}
                    inputStyle={{
                        paddingHorizontal: moderateScale(10),
                    }}
                    mainContainerStyle={{
                        ...styles.textInput_main_container,
                        marginTop: moderateScale(30),
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainer_sty,
                        backgroundColor: colors.secondaryThemeColor
                    }}
                    placeholder="Type your  Value"

                />

                <Text style={{
                    ...styles.Duration_txt,
                    color: colors.primaryFontColor
                }}>Attach Image</Text>

                {/* ==========================multiple img hobe ===================================== */}
                
                <View style={{
                    ...styles.add_img_box,
                    borderColor: colors.borderColor
                }}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../Assets/images/add_img.png')}
                            style={{
                                height: moderateScale(45),
                                width: moderateScale(45)
                            }}
                        />
                        <Text style={{
                            ...styles.add_img_txt
                        }}>Add Image</Text>
                    </View>
                </View>


                <AppButton
                    title="Submit"
                    textStyle={{
                        ...styles.button_txt,
                        color: colors.primaryThemeColor
                    }}
                    style={{
                        ...styles.button_sty
                    }}
                // onPress={() => NavigationService.navigate('AppStack')}
                />
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    Email_id_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(15)
    },
    textInput_main_container: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
    },
    inputContainer_sty: {
        borderRadius: moderateScale(5),
        borderWidth: 0,
        elevation: 3,
        height: moderateScale(50)
    },
    Duration_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(15)
    },
    textInput_view: {
        height: moderateScale(50),
        backgroundColor: '#fff',
        borderRadius: moderateScale(5),
        elevation: 6,
        marginTop: moderateScale(7),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(7),
        // width: '100%',
    },
    text_input_sty: {
        height: moderateScale(40),
        padding: moderateScale(7),
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(15),
        width: moderateScale(120),
    },
    add_img_box: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        height: moderateScale(120),
        width: '90%',
        borderWidth: 1,
        borderRadius: moderateScale(5),
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    add_img_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12)
    },
    button_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(17)
    },
    button_sty: {
        marginTop: moderateScale(50),
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        width: '92%',
        alignSelf: 'center',
        marginBottom: moderateScale(20)
    },
});

//make this component available to the app
export default AddProject;
