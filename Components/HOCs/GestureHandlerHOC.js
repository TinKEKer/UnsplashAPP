import React from 'react'
import {PinchGestureHandler, State} from "react-native-gesture-handler";
import {Animated, StyleSheet} from "react-native";


export const GestureHandlerHOC = ({children, scale}) => {

    const onPinchStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(scale, {
                toValue: 1,
                useNativeDriver: true
            }).start()
        }
    }


    return (
        <PinchGestureHandler
            onGestureEvent={Animated.event(
                [{
                    nativeEvent: {scale: scale}
                }],
                {
                    useNativeDriver: true
                })}

            onHandlerStateChange={onPinchStateChange}

        >
            <Animated.View style={styles.container}>
            {children}
            </Animated.View>
        </PinchGestureHandler>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})