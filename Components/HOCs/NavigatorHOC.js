import React from 'react'
import {TouchableWithoutFeedback} from "react-native";


export const NavigatorHOC = ({navigation,endPoint,item,children})=>{
    return(
             <>
            <TouchableWithoutFeedback onPress={() => navigation.push(endPoint.toString(),{item})}>
                {children}
            </TouchableWithoutFeedback>
            </>
    )
}