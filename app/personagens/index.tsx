import React from "react";
import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Personagens() {
    const router = useRouter();
    const id = 1;

    return (
        <View>
            <Text>Lista de Personagens</Text>
            <Button 
                title={`Personagem - ${id}`} 
                onPress={() => router.push(`/personagens/${id}`)}
            />
        </View>
    );
}
