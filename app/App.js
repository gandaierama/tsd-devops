import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Button, SpeedDial } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IMAGENAME, BG } from './assets';

export default function App() {




  return (
    <View style={styles.container}>

      <div style={{
    width: '100%',
    height: '40%',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: {IMAGENAME },
    backgroundSize: 'cover'
  }}>
  <ImageBackground source={BG} resizeMode="cover" style={{
    width: '100%',
    height: '100%',
    margin: 'auto'
  }}>
      <Image source={IMAGENAME } style={{
    width: '200px',
    height: '200px',
    margin: 'auto',
    marginTop: '6%'
  }}/>
  </ImageBackground>
  </div>
      

      <Button
        title="Cadastrar Empresa"
      />

      <Button
        title="Cadastrar Motoboy"
      />

      <Button
        title="Acessar Conta"
      />

      <StatusBar style="auto" />


      <SpeedDial
  isOpen={open}
  icon={{ name: 'edit', color: '#fff' }}
  openIcon={{ name: 'close', color: '#fff' }}
  onOpen={() => setOpen(!open)}
  onClose={() => setOpen(!open)}
>
  <SpeedDial.Action
    icon={{ name: 'add', color: '#fff' }}
    title="Add"
    onPress={() => console.log('Add Something')}
  />
  <SpeedDial.Action
    icon={{ name: 'delete', color: '#fff' }}
    title="Delete"
    onPress={() => console.log('Delete Something')}
  />
</SpeedDial>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
