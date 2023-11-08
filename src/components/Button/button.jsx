import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function button() {
  return (
    <View>
      <Text style={styles.Text}>1st Practice App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Text:{
        backgroundColor:"grey",
        color:"white",
        fontSize:40,
        textAlign:"center"
        

        
        
        
    }
})