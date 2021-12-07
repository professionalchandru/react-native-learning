/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import { tailwind } from 'tailwind';

const App = () => {

  const [name,setName] = useState('')
  const [submmited, setSubmitted] = useState(false)

  const onPressHandler = () => {
    setSubmitted(!submmited)
  }

  return (
    <>
      <View style={tailwind('flex-1 bg-white items-center')}>
        <Text style={tailwind('text-black text-xl m-2.5')}>Please Enter Your Name:</Text>
        <TextInput 
          multiline 
          // keyboardType='number-pad'
          maxLength={20}
          // editable={false} //like disable 
          secureTextEntry={false}
          onChangeText={(name)=>setName(name)}
          style={tailwind('mb-3 border-b border-gray-500 w-3/4 text-center')}
        />

        <Button 
          disabled={submmited}
          onPress={onPressHandler}
          title="Dare Me" 
          style={tailwind('my-5 w-full px-3 rounded-md')} 
        />
        
        {submmited &&
          <Text style={tailwind('mt-3 text-blue-500 text-lg italic')}>
            Your Name Is: {name}
          </Text>
        }
      </View>
    </>
  );
  }

export default App;
