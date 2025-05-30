import {Slot, Stack} from "expo-router";
import React from "react";

export default function layout(){
    return (
        <Stack>
            <Stack.Screen name = "(tabs)" options = {{headerShown:false}}/>
        </Stack>
    );
 }