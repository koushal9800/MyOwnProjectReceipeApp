import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const AuthButton = ({text,onPress,iconName})=>{
    return (
        <View style={{ width:'45%' }} >
            <TouchableOpacity style={{
                backgroundColor:'transparent',
                borderRadius:20,
                padding:12,
                alignItems:'center',
                flexDirection:'row',
                borderWidth:1,
                borderColor:'#7B8788',
                justifyContent:'center'
                // width:'100%'
            }} 
            onPress={onPress}
            >
                <MaterialCommunityIcons name={iconName} size={20} color='#99AAAB' />
                <Text style={{ color:'#586776', fontSize:16, fontWeight:'600', marginLeft:12 }} >{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthButton