import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Items from '../json/parkings.json'

import ParkingItem from '../components/parkingItem'

export default function Parking() {
   

    return (

        <FlatList
        horizontal 
        pagingEnabled 
        scrollEnabled 
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        scrollEventThrottle={16}
        contentInset={{top:0, left:0, bottom:0, right:12}}
        onScroll={props => console.log('onScroll',props)}
        style={styles.ParkingStyle}
        data={Items}
        renderItem={({ item, index }) => <ParkingItem x={item} index={index} />}
        keyExtractor={(item)=> `${item.id}`}
        />


        

    )
  }


const styles = StyleSheet.create({
    ParkingStyle:{
        position:'absolute',
        right:24,
        left:24,
        bottom: 20,
    }, 



})