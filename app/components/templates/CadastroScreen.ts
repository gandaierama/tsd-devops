import React, {useState, setState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {Dimensions, SafeAreaView, Button, Alert, TextInput, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logo.svg';
import BG from './assets/bg1.svg';


const Separator = () => (
  <View style={styles.separator} />
);

const CadastroScreen= () => { 

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 
  const [error, setError] = useState(''); 
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");

  const [dimensions, setDimensions] = useState({ window, screen });
  
  const Login = () =>{
    if(email==='') setError('o e-mail precisa ser preenchida');
    if(senha==='') setError('a senha precisa ser preenchido');
    console.log(email);
    console.log(senha);
  }

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  return( 
    <SafeAreaView>
    <ImageBackground source={BG} resizeMode="cover" style={styles.bg}>
    <View style={styles.container1}>

      
      <img src={Logo} width="350" height="350"/>
      <Text><h1>Cadastro de motoboys</h1></Text>
      
    </View>
    </ImageBackground>
    <View style={styles.container2}>

            <Text><h1>Cadastre-se agora</h1></Text>

      
      <Separator />
       
 
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    )
  };


const styles = StyleSheet.create({
  debug:{
    fontSize:'11px'
  },
  container1: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    height:'30vh'
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height:'40vh'
  },
  error: {
    color: 'red',
    fontSize: '12px'
  },
  bg: {
    height:'auto',
    justifyContent: "center"
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
    fontSize:'2vh'
  },
  input: {
    height: '5vh',
    fontSize: '1.8vh',
    margin: 12,
    backgroundColor:'#C4C4C4',
    borderRadius:'10px',
    width: '60vw',
    padding: 15,
  },

});


export default CadastroScreen;