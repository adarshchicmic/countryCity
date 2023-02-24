import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/Style'

export default function Buttons(props) {
  return (
    <TouchableOpacity onPress = {props.onClick} style ={props.Stylee} >
        <Text style = {props.StyleeT}>{props.title} </Text>
    </TouchableOpacity>
  )
}