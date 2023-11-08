import { View, Text, StyleSheet } from 'react-native'
import Button from './src/components/Button/button'
export default function App() {
  return (
    <View>
      <Button/>
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

alignItems:"center",
display:"flex",
justifyContent:"center"
}



}) 