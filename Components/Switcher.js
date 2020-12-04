import React from 'react'
import {View,TouchableWithoutFeedback} from "react-native";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../config/constants";
import { FontAwesome } from '@expo/vector-icons';


export const Switcher = ({setOverflow,overflow})=>{
    return(
        <TouchableWithoutFeedback onPress={()=>setOverflow(!overflow)}>
        <View style={{width:DEVICE_WIDTH*0.2,backgroundColor:'rgba(255,255,255,0.6)',position:'absolute',top:DEVICE_HEIGHT*0.93,height:DEVICE_HEIGHT*0.1,right:DEVICE_WIDTH*0.05,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:15}}>
            <FontAwesome name="eye" size={DEVICE_WIDTH*0.15} color={overflow?"red":"black"} />
        </View>
        </TouchableWithoutFeedback>
    )
}