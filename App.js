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
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
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

        {/* Button */}
        {/* <Button 
          disabled={submmited}
          onPress={onPressHandler}
          title="Dare Me" 
          style={tailwind('my-5 w-full px-3 rounded-md')} 
        /> */}

        {/* Tochable */}
        {/* <TouchableHighlight 
          onPress={onPressHandler}
          style={tailwind('px-10 py-4 rounded-md bg-pink-300')}
          activeOpacity={0.2} //by default .2
          underlayColor="#3f2f1f" //used for custom opacity color
        >
          <Text> {submmited ? 'clear' : 'submit'} </Text>
        </TouchableHighlight> */}

        {/* Pressable */}
        <Pressable
          // onLongPress={onPressHandler}
          // delayLongPress={10000}
          onPress={onPressHandler}
          hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
          android_ripple={{color: '#00f'}}
        >
          <Text 
            style={tailwind('px-10 py-4 rounded-md bg-blue-400')}
          > {submmited ? 'clear' : 'submit'} </Text>
        </Pressable>
        
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
