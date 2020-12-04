import React, {useRef} from 'react'
import {Animated} from "react-native";
import {AnimatedImageComponent} from "../AnimatedImage";
import {GestureHandlerHOC} from "../HOCs/GestureHandlerHOC";
import {BackButton} from "./BackButton";

 const PhotoDetails=(props)=>{

     const {item} = props.route.params

     const {navigation} = props;

     const scale = useRef(new Animated.Value(1)).current;




    return(
        <>
            <BackButton navigation={navigation}/>
            <GestureHandlerHOC scale={scale}>
                    <AnimatedImageComponent type={'PhotoDetailImage'} url={item.urls.regular} scale={scale} item={item}/>
            </GestureHandlerHOC>
        </>
    )
}
PhotoDetails.sharedElements = (route, otherRoute, showing) => {
    const {item} = route.params

    return [{id: `item.${item.id}.photo`}]

}

export default PhotoDetails

