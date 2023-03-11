import { Text, StyleSheet, View, ScrollView, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import React, { Component, useState } from 'react'
import Items from '../json/parkings.json'

const {width, height} = Dimensions.get('screen')



export default function Parking() {
    const [hours, setHours] = useState({})

    return (

        <ScrollView horizontal 
        pagingEnabled 
        scrollEnabled 
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        scrollEventThrottle={16}
        contentInset={{top:0, left:0, bottom:0, right:12}}
        onScroll={props => console.log('onScroll',props)}
        style={styles.ParkingStyle}>
            
        {Items.map((x, index) => <View style={styles.ItemText}>

            <View>
             <Text  key={index}>{x.title}</Text>
            </View>

        <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'column'}}>
                <Text>${x.price}</Text>
                <Text>  {x.rating}</Text>
            </View>

            <TouchableWithoutFeedback style={{flex:1}} >

                    <View style={{backgroundColor:'coral', flexDirection:'row', justifyContent:'space-between', padding:10, borderRadius:6}}>
                        <View >
                                <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>${x.price * 2}</Text>
                                <Text style={{color:'white', fontSize:10}}>{x.price}x{hours[x.id]} hrs</Text>
                         </View>

                      <Text style={{marginBottom:'auto', marginTop:'auto',color:'white', fontSize:20, marginLeft:10, fontWeight:'bold'}}>></Text>
                        
                    </View>
                    

            </TouchableWithoutFeedback>

        </View>

                

            
                </View>
                )}
        </ScrollView>
        

    )
  }


const styles = StyleSheet.create({
    ParkingStyle:{
        position:'absolute',
        right:24,
        left:24,
        bottom: 20,
    }, 

    ItemText:{
        flex:1,
        backgroundColor:'white',
        padding:20,
        marginHorizontal: 24,
        width: width - (24 * 2),
        borderRadius: 7,
        flexDirection:'row',

    }
    

})