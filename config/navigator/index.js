import { NavigationContainer } from '@react-navigation/native';
import {StackNavigator} from "./StackNavigator";
import React from "react";


export const Navigator = ()=>{
    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}