import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppBar, Card } from 'react-native-basic-elements';
import NavigationService from '../../Services/Navigation';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenHeader = ({ title = '', showIcon=true }) => {

    return (
        <Card style={{
            borderRadius: 0,
            backgroundColor:'#fff'
        }}>
            <AppBar.Back
                // style={{ height:moderateScale(50)}}
                title={title}
                titlePosition="left"
                titleStyle={{ fontFamily: FONTS.bold, fontSize: 18, color: '#263238' }}
                onLeftIconPress={() => NavigationService.back()}
                icon={
                    showIcon ?

                        {
                            name: 'arrow-back-outline',
                            type: 'Ionicon',
                            size: 20
                        }
                        :
                        []
                }
            />
        </Card>
    );
};

export default ScreenHeader;

const styles = StyleSheet.create({
    backbuttonCircle: {
        height: moderateScale(23),
        width: moderateScale(23),
        color: '#F0F0F0',
    },
    searchbackground: {
        height: moderateScale(25),
        width: moderateScale(25),
        backgroundColor: '#F0F0F0',
        borderRadius: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
