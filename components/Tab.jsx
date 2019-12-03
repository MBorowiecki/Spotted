import React from 'react'
import styled from 'styled-components'
import { Animated, TouchableOpacity, View, Text } from "react-native"

const Tab = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        /*style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "tomato"]
          })
        }}*/
      >
        <Text
          /*style={{
            color: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["#444", "#fff"]
            })
          }}*/
        >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Tab