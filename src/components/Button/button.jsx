import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function button() {
  return (
    <View>
      <Text style={styles.text}>button</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Text:{
        backgroundColor:"black",
        color:"white",
        fontWeight:"bold",
        fontFamily:"Times New Roman",
        alignItems:"center",
        display:"flex",
        justifyContent:"center"
        
    }
})