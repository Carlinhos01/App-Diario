import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {

  const [diario, setDiario] = userState([]);

  function deleteDiario(id){

    FirebaseError.collection("diario").doc(id).delete();

    Alert.alert("O diario foi Deletado.");
  }

  useInsertionEffect(()=>{
    fireabase.collection("diario").onSnapshot((query)=>{
      const lista=[];
      query.forEach((doc)=> {
        lista.push({...doc.data(),id: doc.id});
      });
    })

  })

  return (
    <View style={styles.container}>
      <View style={styles.titulo}><Text style={styles.tx}>Meu Diário</Text></View>
      <View style={styles.bloco}>
      <Text style={styles.txt}>Data: 11/03/2024</Text>
      <Text style={styles.tx}>Palavra: Codar</Text>
      <Text style={styles.txt}>Meus Códigos são horríveis!!</Text>
      <StatusBar style="auto" />
      </View>
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
