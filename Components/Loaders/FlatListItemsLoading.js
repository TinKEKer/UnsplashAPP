import React from 'react'
import {DEVICE_HEIGHT} from "../../config/constants";
import {ActivityIndicator,View,StyleSheet,Platform} from "react-native";

export const FlatListItemsLoading = ({photosLength,loading})=>{
    return(
        photosLength!==0&&loading?<View style={styles.container}>
                <ActivityIndicator animating size={Platform.OS==='android'?70:"large"} color="rgba(255,0,255,1)" />
            </View>:null
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
        position:'absolute',
        top:DEVICE_HEIGHT/2,
        zIndex:100,
    },
});