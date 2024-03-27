import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../../Firebase';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home({navigation}) {

  const [diario, setDiario] = useState([]);

  function deleteDiario(id){

    FirebaseError.collection("diario").doc(id).delete();

    Alert.alert("O diario foi Deletado.");
  }

  useEffect(()=>{
    Firebase.collection("diario").onSnapshot((query)=>{
      const lista=[];
      query.forEach((doc)=> {
        lista.push({...doc.data(),id: doc.id});
      });
    })

  })

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.txt}>Lista de Dias</Text>
      </View>

      <FlatList 
        data={diario}
        renderItem={({item})=>{
          return(
            <View style={estilo.diario}>

              <TouchableOpacity onPress={()=>navigation.navigate("AlterarDiario",{
                id: item.id,
                titulo: item.titulo,
                texto: item.texto,
                data: item.data,
                local: item.local
              })}>

                <View style={estilo.itens}>
                  <Text style={estilo.titulo}>Título 
                      <Text style={estilo.texto}>{item.titulo}</Text>
                  </Text>

                  <Text style={estilo.titulo}>Texto 
                      <Text style={estilo.texto}>{item.texto}</Text>
                  </Text>

                  <Text style={estilo.titulo}>data
                      <Text style={estilo.texto}>{item.data}</Text>
                  </Text>

                </View>
              </TouchableOpacity>

              <View style={estilo.botaodeletar}>
                <TouchableOpacity onPress={()=>{deletatexto(item.id)}}>
                  <MaterialCommunityIcons name="delete-ciclo-outline" size={70} color="green"/>

                </TouchableOpacity>
              </View> 

            </View>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e9de7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'#094eb2',
    padding: 15,
    borderRadius:10,
    marginBottom:50,
  },
  bloco:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#094eb2',
    padding: 10,
    borderRadius:10,
    height:200,
    width:300,
  },
  tx:{
    backgroundColor: '#8e9de7',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    margin:2,
    width: 150,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
  },
  txt:{
    backgroundColor: '#8e9de7',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    margin:2,
    width: 150,
    borderBottomRightRadius: 10,
    borderTopLeftRadius:10,
  }
});
