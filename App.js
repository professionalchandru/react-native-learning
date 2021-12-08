/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { tailwind } from 'tailwind';

const App = () => {

  const [name,setName] = useState('')
  const [submmited, setSubmitted] = useState(false)
  const [showWarning, setShowWarning] = useState(false)

  const onPressHandler = () => {
    if(name.length > 3) {
      setSubmitted(!submmited)
    } else {

      setShowWarning(true)
    }
  }

  return (
    <>
      <View style={tailwind('flex-1 bg-white items-center')}>

        <Modal
          visible={showWarning}
          onRequestClose={()=> setShowWarning(false)}
          transparent
          animationType="fade"
          hardwareAccelerated
        >

          <View style={tailwind('flex-1 items-center justify-center bg-black bg-opacity-70')}>
            <View style={tailwind(`w-60 h-52 bg-white rounded-2xl`)}>
              
              <View style={tailwind('py-3 bg-yellow-300 items-center justify-center rounded-t-2xl')}>
                <Text style={tailwind('text-lg text-black font-medium')}>
                  Warning !
                </Text>
              </View>

              <View style={tailwind('flex-1 items-center justify-center')}>
                <Text style={tailwind('text-base text-black font-normal text-center')}>
                  The name must be 3 characters long
                </Text>
              </View>

              <Pressable 
                style={tailwind('bg-blue-300 rounded-b-2xl')}
                onPress={() => setShowWarning(false)}  
                android_ripple={{color: '#0f2'}}
              >
                <Text style={tailwind('py-2 text-base text-black font-normal text-center')}>Ok</Text>
              </Pressable>

            </View>
          </View>

        </Modal>

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

  const style = StyleSheet.create({
    test: {
      backgroundColor: '#F2c'
    }
  })

export default App;
