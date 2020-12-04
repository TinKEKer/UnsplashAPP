import React from 'react'
import {NavigatorHOC} from "../HOCs/NavigatorHOC";
import {Animated, StyleSheet, View} from "react-native";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../../config/constants";
import {AnimatedImageComponent} from "../AnimatedImage";
import {AdditionalInfo} from "./AdditionalInfo";


export const FlatListItem = ({item, navigation, scrollX, overflow, index}) => {

    const inputRange = [
        (index - 1) * DEVICE_WIDTH,
        index * DEVICE_WIDTH,
        (index + 1) * DEVICE_WIDTH
    ]
    const translateX = scrollX.interpolate({
        inputRange: inputRange,
        outputRange: [-DEVICE_WIDTH * 0.8, 0, DEVICE_WIDTH * 0.8]
    })
    const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [.3, 1, .3]
    })

    return (
        <>
            <NavigatorHOC endPoint={'PhotoDetails'} item={item} navigation={navigation}>
                <View style={styles.container}>
                    <Animated.View style={[styles.animatedBackground, {opacity, backgroundColor: item.color,}]}/>

                    <View style={[styles.parallaxContainer, {overflow: overflow ? 'hidden' : 'visible'}]}>
                        <AnimatedImageComponent type={'ListImage'}
                                                translateX={translateX}
                                                url={item.urls.regular}
                                                item={item}
                                                overflow={overflow}

                        />
                    </View>

                    <AdditionalInfo type={'Description'} text={item['alt_description']}/>

                    <AdditionalInfo type={'UserInfo'} text={item.user.name}
                                    profileImage={item.user['profile_image'].large} opacity={opacity}
                                    overflow={overflow}/>

                </View>
            </NavigatorHOC>
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT
    },
    parallaxContainer: {
        width: DEVICE_WIDTH * 0.8,
        height: DEVICE_HEIGHT * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    animatedBackground: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 1.2,
        zIndex: -1,
        position: 'absolute',
    }
})