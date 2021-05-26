import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc';
import styles from "./style.js";

export default function Form(){

    const [altura, set_altura] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [teste, setTeste] = useState("Aguardando...");

    function imcCalculator(){
       return setImc((weight / (altura * altura)).toFixed(2));
    }

    function validationImc() {
     if (weight != null && altura != null) {
       imcCalculator()
       set_altura(null)
       setWeight(null)
       setMessageImc("Seu imc é igual:")
       setTextButton("Calcular Novamente")
       return
     }
     setImc(null)
     setTextButton("Calcular")
     setMessageImc("Preencha o peso/altura")
     setTeste("Nada ainda...")
   }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={set_altura}
                    value={altura}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 85.4"
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.buttonCalc} onPress={() => validationImc()} >
                    <Text style={styles.textButtonCalc}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} testeImc={teste} />
        </View>
    );
}