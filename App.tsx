import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import Login from "./src/screens/Login";
import RootNavigator from "./src/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";



const App = ()=>{
    return (
      <NavigationContainer>
       <RootNavigator/>
       </NavigationContainer>
    )
}

export default App