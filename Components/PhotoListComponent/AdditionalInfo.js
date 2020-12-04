import React from 'react'
import {Animated, Image, Text,StyleSheet} from "react-native";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../../config/constants";


export const AdditionalInfo = ({type,text,opacity,profileImage,overflow})=>{
    return(
        <>
            {type==='Description'?<>
                <Text style={styles.descriptionText}
                      numberOfLines={3}
                      adjustsFontSizeToFit={true}
                >{text}</Text>
            </>:null}
            {
                type==='UserInfo'?<>
                    <Animated.View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:DEVICE_WIDTH*0.5,backgroundColor:'rgba(255,255,255,0.6)',borderRadius:30,opacity,position:'absolute',bottom:DEVICE_HEIGHT*0.15,right:DEVICE_WIDTH*0.1,borderBottomRightRadius:overflow?15:0}}>
                        <Image
                            source={{uri:profileImage }}
                            style={styles.userInfoImage}
                        />
                        <Text style={styles.userInfoText} numberOfLines={2} adjustsFontSizeToFit={true} >{text}</Text>
                    </Animated.View>
                    </>:null
            }
        </>
    )
}

const styles = StyleSheet.create({

        userInfoText:{
            textAlign:'center',
            fontSize:20,
            width:DEVICE_WIDTH*0.3
        },
        userInfoImage:{
            width: DEVICE_WIDTH*0.15,
            height: DEVICE_HEIGHT*0.1,
            resizeMode: 'contain',
            borderRadius:100
        },
    descriptionText:{
            fontWeight: 'bold',
            color: 'white',
            position: 'absolute',
            fontSize:25,
            width:DEVICE_WIDTH*0.75,
            textAlign:'center',
            top:DEVICE_HEIGHT*0.45,
            textTransform:'uppercase'
    }
})