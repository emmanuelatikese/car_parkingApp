import { Text, StyleSheet, View,  Dimensions, TouchableWithoutFeedback, Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
const {width, height} = Dimensions.get('screen')
import Tag from '../images/tag.png'
import Rate from '../images/star.png'
// import {Picker} from '@react-native-picker/picker';
import ActiveHandler from '../activeHandler'



const renderItem = ({x, index})=>{
    const [hours, setHours] = useState({})
    const activeHandler = new ActiveHandler(x)
    return (

        <TouchableWithoutFeedback key={x.id} onPress={()=>activeHandler(x.id)}>

       
        <View style={styles.ItemText}>

        <View>
         <Text  key={index}>{x.title}</Text>
         <Text
            style={{
                borderWidth:1,
                padding:2,
                borderColor:'grey',
                borderRadius:5,
                color:'grey',
                fontWeight:'500',
                marginTop:5,
            }}
         >05:00 hrs</Text>
        {/* <Picker
selectedValue={hours[x.id]}
onValueChange={(itemValue, itemIndex) =>
setHours({...hours, [x.id]:itemIndex})
}>
<Picker.Item label="01:00" value={1} />
<Picker.Item label="02:00" value={2} />
<Picker.Item label="03:00" value={3} />
<Picker.Item label="04:00" value={4} />
<Picker.Item label="05:00" value={5} />
<Picker.Item label="06:00" value={6} />
</Picker> */}
        </View>

    <View style={{flex:1, flexDirection:'row'}}>
        <View style={{flex:1, flexDirection:'column', marginLeft:40, marginVertical:15}}>
            <Text style={{fontWeight:'bold', fontSize:12,marginBottom:10}}>
            <Image source={Tag} style={{width:15, height:15,marginRight:10}}/>
                ${x.price}</Text>
            <Text style={{fontWeight:'bold', fontSize:12}}> <Image source={Rate} style={{width:15, height:15,marginLeft:10}}/> {x.rating}</Text>
        </View>

        <TouchableWithoutFeedback style={{flex:1}} >

                <View style={{backgroundColor:'coral', flexDirection:'row', justifyContent:'space-between', padding:10, borderRadius:6}}>
                    <View >
                            <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>
                               
                                ${x.price * 2}</Text>
                            <Text style={{color:'white', fontSize:10}}>{x.price}x{hours[x.id]} hrs</Text>
                     </View>

                  <Text style={{marginBottom:'auto', marginTop:'auto',color:'white', fontSize:20, marginLeft:10, fontWeight:'bold'}}>></Text>
                    
                </View>
                

        </TouchableWithoutFeedback>

    </View>

            

        
            </View>
            </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    ItemText:{
        flex:1,
        backgroundColor:'white',
        padding:20,
        marginHorizontal: 24,
        width: width - (24 * 2),
        borderRadius: 7,
        flexDirection:'row',
        elevation:100

    }
    

})

export default  renderItem