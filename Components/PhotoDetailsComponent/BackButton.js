import React, {useRef} from 'react'
import * as Animatable from "react-native-animatable";
import {Ionicons} from "@expo/vector-icons";
import {TouchableWithoutFeedback} from "react-native";

export const BackButton = ({navigation})=>{

    const ButtonRef = useRef()

    return(
        <TouchableWithoutFeedback  onPress={() => ButtonRef.current.slideOutLeft(100).then(()=>navigation.goBack())
        }>
        <Animatable.View style={{position:'absolute',left:40,top:50,zIndex:100}} useNativeDriver={true} animation={'slideInLeft'} delay={200} ref={ButtonRef} >
            <Ionicons name="md-arrow-round-back" size={50} color="black"  />
        </Animatable.View>
        </TouchableWithoutFeedback>
    )
}