import React from "react";
import { View, Text, StyleSheet, Platform, Image, TextInput, TouchableOpacity } from "react-native";


export function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titleHome}>Pricer</Text>
            <View style={styles.logoHome}>
                <Image source={require('../assets/logo.png')} />
            </View>
        
           
            <TouchableOpacity  activeOpacity={0.7}>
            <Text style={styles.iniciarButton}>Inicial</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFE600',
    },
    titleHome:{
        fontSize:24,
        color:'#2D3277'
    },
    logoHome:{
        marginTop:30
    }, 
    iniciarButton:{
        backgroundColor:'#2D3277', padding:10,color:'#fff',fontWeight:'bold',
            fontSize:18,marginTop:80,borderRadius:10
    }

})