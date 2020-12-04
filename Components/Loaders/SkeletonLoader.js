import React from 'react'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../../config/constants";
import * as Animatable from 'react-native-animatable'

export const SkeletonPhotoLoader = ({overflow})=>{
    return(
        <Animatable.View style={{position:'relative',justifyContent:'center',zIndex:10,alignItems:'center',alignSelf:'center'}} useNativeDriver={true}  animation={'fadeIn'} animationDuration={150}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item  alignItems="center" justifyContent={'center'} >
                    <SkeletonPlaceholder.Item width={DEVICE_WIDTH * 0.8} height={DEVICE_HEIGHT*0.7} borderRadius={overflow?15:0} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </Animatable.View>
    )
}