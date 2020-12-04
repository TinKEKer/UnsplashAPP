import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import React from "react";
import PhotoList from "../../Components/PhotoListComponent/PhotoList";
import PhotoDetails from "../../Components/PhotoDetailsComponent/PhotoDetails";


const Stack = createSharedElementStackNavigator();

export const StackNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName="PhotoList" headerMode={'none'}>
            <Stack.Screen name="PhotoList" component={PhotoList} />
            <Stack.Screen name="PhotoDetails" component={PhotoDetails} />
            </Stack.Navigator>
    )
}