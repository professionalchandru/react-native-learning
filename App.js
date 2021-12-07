/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import { tailwind } from 'tailwind';

const App = () => {

  const [name,setName] = useState('')

  return (
    <>
      <View style={tailwind('flex-1 bg-white items-center')}>
        <Text style={tailwind('text-black text-xl m-2.5')}>Please Enter Your Name:</Text>
        <TextInput onChangeText={(name)=>setName(name)} style={tailwind('border-b border-gray-500 w-3/4 text-center')} />

        <View style={tailwind('my-6')}>
          <Text style={tailwind('text-blue-500 text-lg italic')}>
            Your Name Is: {name}
          </Text>
        </View>
      </View>
    </>
  );
  }

export default App;
