import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import MapView from 'react-native-maps'

export default function Map(){
    return (
        <View style={styles.MapStyle}>
            <MapView 
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={{flex:3}}

            />
        </View>
    )
}

const styles = StyleSheet.create({

    MapStyle:{
        flex:1, 
    }

})