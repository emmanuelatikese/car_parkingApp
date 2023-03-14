import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { useState } from 'react'

export default class activeHandler extends Component {
    render(x){
        const [active, setActive] = useState({})
        setActive(x)
        return active

    }


  }
