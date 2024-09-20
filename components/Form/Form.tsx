import React, { useState } from "react";
import { View,Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function Form(){
    const [side, setSide] = useState('');
    const [area,setArea]  = useState('');

    function calcularArea(){
       let result = ((side ** 2) * Math.sqrt(3)) /4;

       setArea(result);
       
    }

    return(
        <View>
            <View>
                <Text>Lado:</Text>
                <TextInput
                onChangeText={setSide}
                placeholder="Digite o lado em cm"
                inputMode="numeric"
                value={side}

                />
                <Pressable
                    title="calcular"
                    onPress={()=> calcularArea()}
                />
            </View>
        </View>
    )
}