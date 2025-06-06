import React,{ useState, useEffect}  from "react"; 
import { Button, Text,TextInput,View, } from "react-native";

export default function Soma(){
    const [Peso,setPeso] = useState(0);
        const [Altura,setAltura] = useState(0);
            const [IMC,valorIMC] = useState(0);
                const [valor, setValor] = useState('');

    useEffect(() =>{
    setPeso(0)
    setAltura(0);
    },[]);
         
    useEffect(() =>{
      const Imc =  Peso/Altura*Altura;
    valorIMC(Imc)
    },[Peso,Altura]);

    return(
        <View>
        <TextInput placeholder="Digite o seu Peso" keyboardType="numeric" onChangeText={(e) => setPeso(e)}/>
        <TextInput placeholder="Digite sua Altura" keyboardType="numeric" onChangeText={(e) => setAltura(e)}/>
        
        <Text>O valor IMC é: {IMC}</Text>
        <Text>Valor da Soma:</Text>
        </View>
    )
}