import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";

const img = '../images/image_back.jpg';

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

    const navigation = useNavigation();

  const handleLogin = () => {
        if(user === '' && password === '') {
            navigation.navigate('main')
        } else {
            alert('Usuário ou senha inválidos!')
        }
  };

  const handleSignUp = () => {
    if(user === '' && password === '') {
        navigation.navigate('signup')
    } else {
        alert('Usuário ou senha inválidos!')
    }
};

  return (
    <View style={styles.container}>
      <ImageBackground source={require(img)} style={{width: '100%', height: '100%'}}>
        <Image source={require('../images/morty.png')} style={styles.imageForeground}/>
      <TextInput
      style={styles.input}
      placeholder="Usuário"
      value={user}
      onChangeText={setUser}
      />
      <TextInput
      style={styles.input}
      placeholder="Senha"
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>CADASTRAR USUÁRIO</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d1117',
      },
      input: {
        borderWidth: 1,
        backgroundColor: '#ddd',
        borderColor: '#86fc17',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
        borderWidth: 3,
      },
      button: {
        backgroundColor: '#86fc17',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        margin: 5,
        alignSelf: 'center',
      },
      buttonText: {
        color: '#000',
        fontWeight: 'bold',
      },
      imageForeground: {
        width: 160,
        height: 160,
        alignSelf: 'center',
      },
},)

export default Login;