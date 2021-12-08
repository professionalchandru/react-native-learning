import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { tailwind } from 'tailwind'

const Button = ({onPressHandler, submmited}) => {
    return (
        <View>
            <Pressable
            onPress={onPressHandler}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            android_ripple={{color: '#242f0c'}}
            >
            <Text 
                style={tailwind('px-10 py-4 rounded-md bg-green-400')}
            > {submmited ? 'clear' : 'submit'} </Text>
            </Pressable>
        </View>
    )
}

export default Button
