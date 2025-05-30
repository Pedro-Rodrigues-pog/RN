import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface props{
    title: string
    func : ()=> {
        pix : string
        
    }
}

export default function CustomButton({title,func}: props){ //Desconstrução de um objeto
    return(
        <TouchableOpacity>
            <Text>{func().pix} </Text>
        </TouchableOpacity>
    );
};
