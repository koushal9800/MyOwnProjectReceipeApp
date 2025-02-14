import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import Login from "./src/screens/Login";
import RootNavigator from "./src/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/constants/AuthContext";


const App = ()=>{
    return (
      <AuthProvider >
      <NavigationContainer>
       <RootNavigator/>
       </NavigationContainer>
       </AuthProvider>
    )
}

export default App