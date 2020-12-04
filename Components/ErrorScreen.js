import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from "react-native";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../config/constants";


export const ErrorScreen = ({error,setPage})=>{
  return (error?<View style={styles.container}>
        <Text style={styles.errorText}>Something Went Wrong :(</Text>
            <TouchableOpacity style={styles.errorButton} onPress={()=>setPage(1)}>
                <View>
                  <Text style={{textAlign: 'center',fontSize:20}}>Press to Reload</Text>
                </View>
    </TouchableOpacity>
    </View>:null)
}

const styles = StyleSheet.create({
  container:{
    width:DEVICE_WIDTH,
    height:DEVICE_HEIGHT*1.2,
    backgroundColor:'rgb(238,226,141)',
    justifyContent:'center',
    alignItems:'center',
  },
  errorButton:{
       marginTop:DEVICE_HEIGHT*0.05,
    width:DEVICE_WIDTH*0.5,
    height: DEVICE_HEIGHT*0.1,
    borderColor:'black',
    borderRadius:10,
    borderWidth:3,
    justifyContent: 'center'
  },
  errorText:{
    fontSize:25
  }
})