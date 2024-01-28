import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Carltem = props => {
 const{ name,weight,color}=props;   
  return (
    <View styles={styles.container}>
      <Text styles={styles.txt}>{'name:'} </Text>
      <Text styles={styles.txt}>{'weight'} </Text>
      <Text styles={styles.txt}>{'color:'} </Text>
    </View>
  )
}

export default Carltem

const styles = StyleSheet.create({})