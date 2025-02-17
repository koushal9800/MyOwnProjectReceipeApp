import React from 'react'
import {View,Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const HomeScreen =()=>{
    return (
        <View style={styles.container} >
           <View style={{ justifyContent:'center', alignItems:'center' }} >
            <Image 
            style={{width: '70%', height: '70%'}}
            resizeMode="contain"
            source={{
              uri: 'https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?q=80&w=3382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            />
            <Text style={{ fontSize:24, marginTop:24  }} >No Menus Catured yet!</Text>
            <Text style={{ marginTop:4 }} >Tap below to begin your menu adventure</Text>
           </View>

           <View style={{ bottom:0, position:'absolute', justifyContent:'center', alignItems:'center', width:'100%' }} >
            <TouchableOpacity style={{width:'90%',flexDirection:'row', backgroundColor:'#EA425C', padding:12, marginVertical:12, alignItems:'center', justifyContent:'center', borderRadius:8, marginHorizontal:24, }} >
                
                <MaterialCommunityIcons name='camera' color={'#fff'} size={16} />
                <Text style={{ color:'#fff', marginLeft:4 }} >Take Photo</Text>
            </TouchableOpacity>
           </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#fff'
    }
})