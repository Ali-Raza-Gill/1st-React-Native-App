import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View>
      <Text style={appStyle.Textheader}>Hellow world</Text>
      <Text style={{ backgroundColor: "white", color: "red" }}>I want to become a android </Text>
      <Text style={{ backgroundColor: "white", color: "orange" }}>Developer</Text>
    </View>
  )
}

const appStyle = StyleSheet.create({
Textheader:{
  color:"black",
  backgroundColor:"white",
fontFamily:"arial"
  
}



}) 