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
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from './src/components/Button';
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
      <ImageBackground blurRadius={5} source={{uri: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={tailwind('flex-1 bg-white items-center')}>

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
        <Button submmited={submmited} onPressHandler={onPressHandler} />
        
        {submmited ?
          <View>
            <Text style={tailwind('mt-3 text-blue-500 text-lg italic')}>
              Your Name Is: {name}
            </Text>
            <Image 
              style={style.image}
              resizeMode='stretch'
              source={require('./assets/done.png')} 
            />
          </View>
          :
          <Image 
            style={style.image}
            resizeMode='stretch'
            source={{uri: 'https://thumbs.dreamstime.com/b/oops-words-reflective-white-background-concept-error-screens-49260938.jpg'}} 
          />
        }
      </ImageBackground>
    </>
  );
  }

  const style = StyleSheet.create({
    test: {
      backgroundColor: '#F2c'
    },
    image: {
      width: 100,
      height: 100,
      margin: 10
    }
  })

export default App;
