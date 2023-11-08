import { View, Text, StyleSheet } from 'react-native'
import Button from './src/components/Button/button'
export default function App() {
  return (
    <View>
      <Button />
      <Text style={appStyle.Textheader}>Hellow world</Text>
      <Text style={{ backgroundColor: "white", color: "red" }}>I want to become a android </Text>
      <Text style={{ backgroundColor: "white", color: "orange" }}>Developer</Text>
      <Text style={appStyle.text2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quisquam cumque mollitia molestiae recusandae repellat vel illo soluta ratione. Rerum facilis facere quis animi expedita reprehenderit nihil itaque eum voluptate.</Text>
      <Text style={appStyle.text3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quisquam cumque mollitia molestiae recusandae repellat vel illo soluta ratione. Rerum facilis facere quis animi expedita reprehenderit nihil itaque eum voluptate.</Text>
      <Text style={appStyle.text4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quisquam cumque mollitia molestiae recusandae repellat vel illo soluta ratione. Rerum facilis facere quis animi expedita reprehenderit nihil itaque eum voluptate.</Text>

    </View>
  )
}

const appStyle = StyleSheet.create({
  Textheader: {
    color: "black",
    backgroundColor: "white",
    marginLeft:80,
    marginBottom:50,
    marginRight:100,
    marginTop:20,
    fontSize:50
  },
  text2:{
color:"orange"
},
text3:{
color:"blue"
},
text4:{
  color:"pink"
}


}) 