import { Text, StyleSheet, View} from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import Items from '../json/parkings.json'
import ActiveHandler from '../activeHandler';

export default function Map(){
    const activeHandler = new ActiveHandler()
    
    return (
        <View style={styles.MapStyle}>
            <MapView 
            initialRegion={{
                latitude: 6.6834 ,
                longitude: -1.6256,
                latitudeDelta:  0.05,
                longitudeDelta:  0.05,
              }}
              style={{flex:3}}

            >
                {Items.map((x)=> 
                <Marker key={x.id} coordinate={x.coordinate} >
                    <View style={[styles.marker, activeHandler == Items.id ? styles.active : null]}>
                    <Text style={{fontWeight:'bold', color:'white'}}>${x.price}</Text><Text style={{fontWeight:'bold',color:'white'}}>({x.free}/{x.spot})</Text>
                    </View>
                   

                    
                </Marker>)}

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({

    MapStyle:{
        flex:1, 
    },
    marker:{
        flex:1,

        backgroundColor:'coral',
        shadowColor:'grey',
        shadowOffset:{
            width:0,
            height:12,
        },
        shadowOpacity:0.50,
        shadowRadius:10,
        padding:5,
        borderRadius:24,
        elevation:10,
        width:100,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'center'
       
        
    },
    active:{
        borderColor:'white'
    }
    

})

