import React, { useState } from 'react'
import { Theme } from 'react-native-basic-elements';
import AuthStack from './App/Navigation/AuthStack';
import AppStack from './App/Navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import NavigationService from './App/Services/Navigation';


const Stack = createStackNavigator();
const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Theme.Provider
        theme={{
          light: {
            primaryThemeColor: '#fff',
            secondaryThemeColor: '#fff',
            primaryFontColor: '#263238',
            secondaryFontColor: 'rgba(0, 0, 0, 0.6)',
            boldTextColor: '#000000',
            cardColor: '#A7AEC1',
            headerColor: '#fff',
            pageBackgroundColor: '#fff',
            tabBarColor: '#fff',
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: '#066DE6',
            borderColor: '#999'
          },
          dark: {
            primaryThemeColor: 'black',
            secondaryThemeColor: '#000',
            primaryFontColor: '#263238',
            secondaryFontColor: 'rgba(0, 0, 0, 0.6)',
            boldTextColor: '#000000',
            cardColor: '#A7AEC1',
            headerColor: '#000',
            pageBackgroundColor: '#0A0A0A',
            tabBarColor: '#000',
            shadowColor: '#1E1E1E',
            statusBarStyle: "light-content",
            buttonColor: '#066DE6',
            borderColor: '#999'
          },
        }}
        mode={isDark ? 'dark' : 'light'}
      >
        {/* <Test
          onChange={() => setIsDark(!isDark)}
        /> */}
        <NavigationContainer
          ref={r => NavigationService.setTopLevelNavigator(r)}
        >
          <Stack.Navigator
            initialRouteName='AuthStack'
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="AppStack" component={AppStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </Theme.Provider>
    </View>
  )
}

export default App;