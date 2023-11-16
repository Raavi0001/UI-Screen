import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

 const Home=()=> {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
};
export default Home;
const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:"center",
    flex:1
  }
})