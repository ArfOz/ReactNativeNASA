import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"

import {Main, Select} from "./pages"

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Select" component={Select} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
