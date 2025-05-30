import React, { useState } from "react";
import { CheckBox ,Button, Text,View, TextInput } from "react-native";



    export default function Form (){
        const [exibir, setExibir] = useState(false);

        const[text, setconta] = React.useState('');
        const[number, setconta2] = React.useState('');
        const[number2, setconta3] = React.useState('');
        const [isSelected, setSelection] = useState(false);
        function exibirTexto(){
return(
            <View>
                <Text>{text}</Text>
                <Text>{number}</Text>
                <Text>{number2}</Text>
            </View>
) 
        }
        return(
            <View>
        <Button title="Teste"/>
          <CheckBox value={isSelected} onValueChange={setSelection} style={CheckBox} /> <TextInput placeholder="Digite algo 1/3" onChangeText={setconta} />
           <CheckBox value={isSelected} onValueChange={setSelection} style={CheckBox}/><TextInput placeholder="Digite algo 2/3" onChangeText={setconta2}/>
           <CheckBox value={isSelected} onValueChange={setSelection} style={CheckBox}/><TextInput placeholder="Digite algo 3/3" onChangeText={setconta3}/>
           <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>

           <Button title="Exibir" onPress={() => {setExibir(true)}}/>
            {exibir ? exibirTexto() : ''}
</View>
   
    )  ;
}
const style= StyleSheet.Create({
    Checkbox:{
        alignSelf: 'center',
    },
   Cheka:{
    flexDirection: 'row',
    marginBottom: 20,
   }

})
  
