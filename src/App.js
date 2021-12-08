/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { tailwind } from 'tailwind';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'


const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('About')
  }
  return(
    <View style={tailwind('flex-1 items-center justify-center')}>
      <Text style={tailwind('text-lg text-black font-medium')}>Hello This is Screen A</Text>

      <Pressable onPress={onPressHandler} style={({pressed}) => tailwind(`${pressed ? 'bg-green-300' : 'bg-red-500'} m-3 rounded-lg`)}> 
        <View style={tailwind('p-3')}>
          <Text>
            GO TO B
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const ScreenB = ({navigation}) => { 
  const onPressHandler = () => {
    navigation.goBack()
  }
  return(
    <View style={tailwind('flex-1 items-center justify-center')}>
      <Text style={tailwind('text-lg text-black font-medium')}>Hello This is About Page</Text>
      <Pressable onPress={onPressHandler} style={({pressed}) => tailwind(`${pressed ? 'bg-green-300' : 'bg-red-500'} m-3 rounded-lg`)}> 
        <View style={tailwind('p-3')}>
          <Text>
            GO TO A
          </Text>
        </View>
      </Pressable>
    </View>
  )
}


const App = () => {

  const Stack = createNativeStackNavigator ();


  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            header: () => null
          }}
        >
          <Stack.Screen
            name="Home"
            component={ScreenA}
            // options={{
            //   header: () => null
            // }}
          />
          <Stack.Screen
            name="About"
            component={ScreenB}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
  }

  const style = StyleSheet.create({
   
  })

export default App;
