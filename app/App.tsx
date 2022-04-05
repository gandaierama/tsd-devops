import React, {useState, setState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {Image, Dimensions, SafeAreaView, Alert, TextInput, ImageBackground, StyleSheet, View } from 'react-native';
import {  Divider, Input, Card, Dialog, ListItem, Header as HeaderRNE, HeaderProps, Icon , Button, Text, SpeedDial } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text'

const Stack = createNativeStackNavigator();
const baseUrl = 'http://api.tsdmotoboys.com.br/';
const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <View style={styles.container3}>

       <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150 }}/>
      
    </View>
      <Text>
        TSD
      </Text>
    </View>
  );
}


const MotoboyScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground source={require('./assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
        resizeMode: "cover",
        height: '120%', // the image height
        top: undefined
      }}>
        <View style={styles.container3}>
          <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150 }}/>
        </View>
      </ImageBackground >
      <Text>
        TSD
      </Text>
    </View>
  );
}

const ClienteScreen = () => {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 
  const [nome, setNome] = useState(''); 
  const [cnpj, setCnpj] = useState(); 
  const [error, setError] = useState(''); 


  // POST Cliente
  const fetchUser = async () => {
    const url = `${baseUrl}/user/1`;
    const response = await axios.get(url);
    console.log(response.data);
  };


  const Cadastro = () =>{
    if(nome==='' || nome===undefined ) setError('o nome precisa ser preenchido');
    if(cnpj==='' || cnpj===undefined ) setError('o nome precisa ser preenchido');
    if(email==='' || email===undefined) setError('o e-mail precisa ser preenchida');
    if(senha==='' || senha===undefined ) setError('a senha precisa ser preenchido');


    const url = `${baseUrl}/user/`;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        cnpj: cnpj,
        senha: senha,
        email: email
      })
    });

    console.log(email);
    console.log(senha);
  }

  return (
    <View style={{  justifyContent: "center", alignItems: "center" }}>
      
        <View style={styles.container3}>
          <ImageBackground source={require('./assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
        resizeMode: "cover",
        height: '120%', // the image height
        top: undefined
      }}>
          <Image source={require('./assets/logo.png')} style={{ width: 80, height: 80 }}/>
        </ImageBackground >
        </View>
      
      <View style={styles.container4}>
        

        <Input
          onChange={setNome}
          placeholder='Digite seu nome'
          className={styles.input}
          style={{  width: '100%'  }}
          value={nome}
        />
      
        <Input
          onChange={setNome}
          placeholder='Digite seu cnpj'
          className={styles.input}
        />

        <Input
          placeholder='Digite seu email'
    
          className={styles.input}
        />
     

        <Input
          placeholder='Digite sua senha'
   
          className={styles.input}
        />

      <Button
              title="Cadastrar"
              onPress={Cadastro}
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />
      </View>
    </View>
  );
}

const HomeScreen = ({ navigation }) => {


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: '60%' }}>
    <ImageBackground source={require('./assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
    resizeMode: "cover",
    height: '120%', // the image height
    top: undefined
  }}>
      <View style={styles.container1}>

      
       <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150 }}/>
      
    </View>
    </ImageBackground >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , height: '40%' }}>
      <Button
              title="Cadastrar"
              onPress={() => navigation.navigate('Cadastro')}
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />

      <Button
              title="Login"
              onPress={() => navigation.navigate('Login')}
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />
      </View>
    </View>
  );
}
const CadastroScreen= ({ navigation }) => { 



  return (
     <View>
       <View className={styles.container3}>
      <ImageBackground source={require('./assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
        resizeMode: "cover",
        height: '200%', // the image height
        top: undefined
      }}>
       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150 }}/>
          <Text>Cadastro de cliente</Text>
      </View>
      </ImageBackground >
      </View>
      <View style={styles.container4}>
      <Button
              title="Motoboy"
              onPress={() => navigation.navigate('Motoboy')}
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />

      <Button
              title="Cliente"
              onPress={() => navigation.navigate('Cliente')}
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />
      </View>
    </View>
  );
}
const CadastroClienteScreen= ({ navigation }) => { 

   return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground source={require('./assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
        resizeMode: "cover",
        height: '120%', // the image height
        top: undefined
      }}>
        <View style={styles.container3}>
          <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150 }}/>
        </View>
      </ImageBackground >
      <Text>
        TSD
      </Text>
    </View>
  );
}
function App({ navigation }) {



  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Cliente" component={ClienteScreen}  />
        <Stack.Screen name="Motoboy" component={MotoboyScreen}  />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  debug:{
    fontSize:11,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden',
    height: '55%'

  },
  container2: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height:'40%'
  },
  title:{
    color: '#fff',
    fontSize: 20
  },
  container3: {
    height: '25%',
    width: '100%',
    alignItems:'center',
    alignContent: 'space-between',
    color:'#fff',
    justifyContent:'space-between'

  },
  container4: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width:'100%',
    height: '75%',
  },
  error: {
    color: 'red',
    fontSize: 11
  },
  bg: {
    height:'100%',
    justifyContent: "center",
    width: '100%',
    top: 0,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttom:{
    padding: 15,
    fontSize:20,
    color:"#000"
  },
  input: {
    fontSize: 17,
    margin: 12,
    backgroundColor:'#C4C4C4',
    width: '60vw',
    padding: 15,
  },
  headerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#397af8',
  marginBottom: 20,
  width: '100%',
  paddingVertical: 15,
},
heading: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
});


export default App;