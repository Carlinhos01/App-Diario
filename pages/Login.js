import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet,TouchableOpacity } from 'react-native';
import { Firebase } from '../Firebase';
import { initializeApp } from "firebase/app";

export default function Login(){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState('');


    function login(){
        Firebase.auth().singInWinthEmailAndPassword(email,senha).catch(
            function(error){
                var erroCode = error.code;
                var errorMassage = error.message;
                alert(erroCode,errorMassage);
            }
        )
    }

    useEffect(()=>{
        Firebase.auth().onAuthStateChanged(function(user){
            setUser(user);
            if(initializing) setInitializing(false);
            alert('oi');
        })
    },[])

    return (
        <View style={styles.container}>
            <Text>Acesso ao Diário</Text>
            <TextInput  style={styles.textInput} placeholder="Digite o email"
            onChangeText={(email)=>setEmail(email)}
            value={email}
            />
            <Text>Acesso ao Diário</Text>
            <TextInput style={styles.textInput}placeholder="Digite a Senha"
            onChangeText={(senha)=>setSenha(senha)}
            value={senha}
            />

            <TouchableOpacity style={styles.botao}
            onPress={()=>{login}}
            >
                <Text>Logar</Text>
            </TouchableOpacity>

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
    textInput:{

    },
    botao:{
        width:100,
        height:30,
        backgroundColor:'#00a1d2',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    }
});