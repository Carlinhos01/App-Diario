import React,{useState, userState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import Firebase from '../../Firebase';

export default function AlterarDiario({navigation,route}){

    const id = route.params.id;

    const [titulo, settitulo] = useState(route.params.titulo);
    const [texto, settexto] = useState(route.params.texto);
    const [data, setdata] = useState(route.params.data);
    const [local, setlocal] = useState(route.params.local);

    function alterarDiario(id,titulo,texto,data,local){
        Firebase.collection("titulo").doc(id).update({
            titulo: titulo,
            texto: texto,
            data: data,
            local: local,
        })
        Alert.alert("Aviso", "Diário alterado com sucesso")
        navigation.navigate("Home")
    }
}