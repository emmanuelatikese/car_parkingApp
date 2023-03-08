import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Header(){
    return (
        <View style={styles.headerStyle}>
            <Text>Header</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    headerStyle:{
        flex: 0.1,
        backgroundColor:'white',
        padding:10,
        
    }

})