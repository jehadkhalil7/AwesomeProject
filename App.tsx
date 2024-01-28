import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarItem from './src/components/carltem'
import { jehad } from './src/res/Data';

const APP = () => {
  // return (
    // <View style={styles.container}>
    //    <View style={styles.container1}>
    //   <View style={styles.containe2r}>
    //       <Text style={styles.txt}>name:JEHAD KHALIL </Text>
    //       <Text style={styles.txt}>B.d:28/10/2003</Text>
    //       <Text style={styles.txt}>My First ui</Text>
    //     </View>
    //   </View>
    // </View>

    const renderjehad = () => {
      const jehadComponents = jehad.map(jehad => {

return(   
  <CarItem name={jehad.name} weight={jehad.weight} color={jehad.color} />
) 
}
     return jehadComponents;
};

export default APP

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 100, 
    borderWidth: 9,
    backgroundColor: 'purple',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    // padding: 15 , 
    textAlign: 'center',


  },
  containe2r: {
    borderWidth: 2,
    justifyContent: 'center',
padding : 50,
    // flexDirection: 'row',
    
  },
  container1:{
    
    
    margin: 100, 
  }
  
  
})
