import React, { useState } from "react";
import { View,Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function Form(){
    const [heigth,setHeigth] = useState('');
    const [weigth,setWeigth] = useState('');
    const [imc,setImc] = useState('')
    
    function imcCalculator()
    {
        let totalImc = (weigth/(heigth*heigth)).toFixed(2)

        setImc(totalImc)
    }
    function validatorImc()
    {
        if(weigth != '' && heigth != ''){
            imcCalculator()
                setHeigth('')
                setWeigth('')
            

        }
    }

    return(
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput
                    placeholder="EX. 1.75"
                    inputMode="numeric"
                    value={heigth}

                />
                <Text>Peso:</Text>
                <TextInput
                    placeholder="EX. 67.5"
                    inputMode="numeric"
                    value={weigth}
                />
               <Pressable>
                    onPress={() => validatorImc}
                    
                    <Text>Calcular</Text>
               </Pressable>

               <Text>{imc}</Text>
            </View>
        </View>
    )
}