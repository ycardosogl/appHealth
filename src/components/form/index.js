import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import ResultImc from "./resultimc";

export default function Form(){

    const [altura, setAltura]= useState(null)
    const [peso, setPeso]= useState(null)
    const [messageImc, setMessageImc]= useState("Preencha o peso e a altura")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("CALCULAR")

    function imcCalculator(){
            return setImc((peso/(altura*altura)).toFixed(2))
        }

    function validarImc(){
            if (peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente")
            return
            }
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
            }    
        
    return(
    <View>
        <View>
                <Text>Altura</Text>
            <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
             />
                <Text>Peso</Text>
            <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 70.750"
                    keyboardType="numeric"
            />
            <Button onPress={() => validarImc()} 
            title="CALCULAR IMC"/>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </View>
    );
}
