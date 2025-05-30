import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const router = useRouter();

  const irParaResultado = () => {
    router.push(`/resultado?numero1=${numero1}&numero2=${numero2}`);
  };

  return (
    <View>
      <Text>Insira o primeiro número:</Text>
      <TextInput keyboardType="numeric" value={numero1} onChangeText={setNumero1} />

      <Text>Insira o segundo número:</Text>
      <TextInput keyboardType="numeric" value={numero2} onChangeText={setNumero2} />

      <Button title="Calcular Multiplicação" onPress={irParaResultado} />
    </View>
  );
}