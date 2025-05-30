import React from "react";
import {StyleSheet, View, Text} from "react-native";

interface props{
    example: string
}
export default function Example({example}: props){
    return(
        <View style={styles.body}>
         <Text style={styles.text} >{example}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    body:{
    backgroundColor: 'orange',
    
    },
    text:{
        fontWeight: 'bold'
    }
});