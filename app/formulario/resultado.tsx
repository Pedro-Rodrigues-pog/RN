import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Button, Text } from "react-native";

export default function Resultado() {
  const { numero1, numero2 } = useLocalSearchParams();
  const router = useRouter();

  const n1 = Number(numero1);
  const n2 = Number(numero2);
  const resultado = n1 * n2;

  return (
    <View>
      <Text>Resultado da multiplicação de {n1} x {n2} é: {resultado}</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}