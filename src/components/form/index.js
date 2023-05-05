import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
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
    <View style = {styles.container}>
        <View>
                <Text style = {styles.label} >Altura</Text>
            <TextInput style = {styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
             />
                <Text style = {styles.label}>Peso</Text>
            <TextInput style = {styles.input1}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 70.750"
                    keyboardType="numeric"
            />
            <Button  onPress={() => validarImc()} 
            title="CALCULAR IMC" color={'#4b0082'} />
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}
    style = {styles.resultContainer}    
    />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    label: {
      color: "#6a5acded",  
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
      Bottom: 5,
      alignSelf: "center",
    },
    input: {
      height: 55,
      width: "100%",
      borderWidth: 2,
      borderColor: "burble",
      borderRadius: 10,
      paddingHorizontal: 35,
      Bottom: 20,
      fontSize: 20,
      
    },
    input1: {
        height: 55,
        width: "100%",
        borderWidth: 2,
        borderColor: "burble",
        borderRadius: 10,
        paddingHorizontal: 25,
        Bottom: 10,
        fontSize: 20,
        
      },
    resultContainer: {
      marginTop: 40,
      alignItems: "center",
   
    },
     
  });
