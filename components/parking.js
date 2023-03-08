import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function Parking() {

    return (
      <View style={styles.ParkingStyle}>
        <ScrollView horizontal >
        <Text>parking</Text>
        </ScrollView>
        
      </View>
    )
  }


const styles = StyleSheet.create({
    ParkingStyle:{
        flex:1,
        position:'absolute',
        backgroundColor:'white',
        right:24,
        left:24,
        bottom: 0,
        padding:10,

    }

})