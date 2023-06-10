import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Picker } from '@react-native-picker/picker';

const img = '../images/image_back.jpg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require(img)} style={{width: '100%', height: '100%'}}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInputMask
        style={styles.input}
        placeholder="Telefone"
        type="cel-phone"
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInputMask
        style={styles.input}
        placeholder="CPF"
        type="cpf"
        value={cpf}
        onChangeText={setCPF}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Picker
        style={styles.picker2}
        selectedValue={curso}
        onValueChange={(itemValue) => setCurso(itemValue)}
      >
        <Picker.Item styles='borderColor: #86fc17' label="Selecione o curso:"/>
        <Picker.Item label="Análise e Desenvolvimento de Software" value="Análise e Desenvolvimento de Software" />
        <Picker.Item label="Desenvolvimento de Software Multiplataforma" value="Desenvolvimento de Software Multiplataforma" />
        <Picker.Item label="Gestão Empresarial" value="Gestão Empresarial" />
        <Picker.Item label="Gestão de Produção Industrial" value="Gestão de Produção Industrial" />
        <Picker.Item label="Gestão de Recursos Humanos" value="Gestão de Recursos Humanos" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d1117',
  }, 
  input: {
    borderWidth: 1,
    borderColor: '#86fc17',
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    borderWidth: 3,
    alignContent: 'center',
    alignItems: 'center',
  },
  picker2: {
    borderWidth: 3,
    borderColor: '#86fc17',
    borderRadius: 5,
    padding: 1,
    marginVertical: 10,
    width: '80%',
    color: '#F0F2EB',
    alignSelf: 'center',
  }, 
  button: {
    backgroundColor: '#86fc17',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SignUp;
