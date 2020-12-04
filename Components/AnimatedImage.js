import {Animated, StyleSheet} from "react-native";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../config/constants";
import React from 'react'
import {SharedElement} from "react-navigation-shared-element";


export const AnimatedImageComponent = ({type, url, translateX, scale,item,overflow}) => {
    return (
        <>
            {type === 'ListImage'?
                 <SharedElement id={`item.${item.id}.photo`}>
                    <Animated.Image
                    source={{uri: url}}
                    style={{transform: overflow?[{translateX}]:[],width:overflow?DEVICE_WIDTH * 1.2:DEVICE_WIDTH*0.8,height:overflow?DEVICE_HEIGHT * 0.7:DEVICE_HEIGHT*0.7}}
                    resizeMode={"cover"}
                    blurRadius={1.5}
                />
                </SharedElement>
             : null}
            {
                type === 'PhotoDetailImage' ?
                    <SharedElement id={`item.${item.id}.photo`} >
                        <Animated.Image source={{uri: url}} style={[
                            styles.detailImage,
                            {
                                transform: [{scale}],
                            }
                        ]}
                                resizeMode={'contain'}
                        />
                    </SharedElement>
                    : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    detailImage: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
    }
})