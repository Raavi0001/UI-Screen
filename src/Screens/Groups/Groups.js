import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

 const Groups=() =>{
  return (
    <View style={styles.container}>
      <Text >Groups</Text>
    </View>
  )
};
export default Groups;
const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:"center",
    flex:1
  }
})