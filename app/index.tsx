import CustomButton from "@/components/CustomButton";
import Example from "@/components/Example";
import React,{ useState }  from "react"; 
import { Button, Text,View, } from "react-native";
import Form from "@/components/Form";
import { useRouter } from "expo-router";
import Index from "./";
export default function HomeScreen(){

    const router = useRouter();

    const[count, setCount] = useState(1);
    const[name, setName] = useState("Brunão");
return (
        //View tem a mesma funcionalidade de uma DIV
        <View style={{backgroundColor: 'red'}}> 
            
           { /*<Text>{count}</Text>
            <Button 
            title="Aumentar" 
            onPress={() => {setCount(count+1)}}/>
                  <Button 
            title="Diminuir" 
            onPress={() => {setCount(count-1)}}/>
            <Button 
            title="Reiniciar" 
            onPress={() => {setCount(count - count)}}/>
            
            <Example example="Texto teste"/>
            
           <Form/>*/}

           <Button title = "Stack navigation" onPress = {() => router.push('/navigation/stack')}/>
           <Button title = "Tabs navigation" onPress = {() => router.push('/navigation/tabs')}/>
           <Button title = "Drawer navigation" onPress = {() => router.push('/navigation/drawer')}/>
             <Button title = "Soma" onPress = {() => router.push('/Soma')}/>
            <Button title = "Personagens" onPress={() => router.push('/personagens/')}/>
           
        </View>
        );
}
