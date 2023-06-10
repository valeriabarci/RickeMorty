import React, { Component } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import { Card, Info, CharacterData, Container, Form, Input, SubmitButton, ImageCharacter, CharacterButton, CharacterButtonText, Character, InfoTitle } from "./styles";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { List } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api"

export default class Main extends Component {

  state = {
    newCharacter: '',
    characters: [],
    loading: false,
  }

  async componentDidMount() {
    const characters = await AsyncStorage.getItem('characters');

    if (characters) {
      this.setState({ characters: JSON.parse(characters) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { characters } = this.state;

    if (prevState.characters !== characters) {
      AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddUser = async () => {
    const { characters, newCharacter } = this.state;

    let episode;

    if (newCharacter != '') {

      this.setState({ loading: true });

      const response = await api.get(`/api/character/?name=${newCharacter}`);

      const getData = response.data.results.map(async result => {
        episode = result.episode[0];

        const response2 = await api.get(episode);
        const data2 = {
          episode: response2.data.name,
        };

        return {
          id: result.id,
          name: result.name,
          status: result.status,
          species: result.species,
          episode: episode,
          image: result.image,
          location: result.location.name,
          ...data2,
        };
      });

      const allData = await Promise.all(getData);

      this.setState({
        characters: [...characters, ...allData],
        newCharacter: '',
        loading: false,
      });

      Keyboard.dismiss();

      console.log(this.state.characters)
    }
    else {
      alert('Digite o nome de um personagem!')
    }
  };

  render() {
    console.log(characters)
    const { characters, newCharacter, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Digite o nome do personagem'
            value={newCharacter}
            onChangeText={text => this.setState({ newCharacter: text })}
            returnKeyType='send'
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (<ActivityIndicator color='#86fc17' />) : (<Icon name='search' size={20} color='#86fc17' />)}

          </SubmitButton>
        </Form>
        <List
          showVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={character => character.id}
          renderItem={({ item }) => (
            <Character>
              <Card>
                <Info>
                  <ImageCharacter source={{ uri: item.image }} />
                  <InfoTitle>Nome</InfoTitle>
                  <CharacterData>{item.name}</CharacterData>
                  <InfoTitle>Status</InfoTitle>
                  <CharacterData>{item.status == 'Alive' ? <Icon name='circle' size={10} color='#0f0' /> : (item.status == 'Dead' ? <Icon name='circle' size={10} color='#f00' /> : <Icon name='circle' size={10} color='#808080' />)} {item.status}</CharacterData>
                  <InfoTitle>Última localização conhecida</InfoTitle>
                  <CharacterData>{item.location}</CharacterData>
                  <InfoTitle>Episódio que ele aparece pela primeira vez</InfoTitle>
                  <CharacterData>{item.episode}</CharacterData>
                </Info>
              </Card>

              <CharacterButton onPress={() => {
                this.props.navigation.navigate('character', { character: item })
              }}>
                <CharacterButtonText>Ver Personagem</CharacterButtonText>
              </CharacterButton>

              <CharacterButton onPress={() => {
                this.setState({ characters: characters.filter(character => character.id !== item.id) })
              }}
                style={{ backgroundColor: '#ff0000' }}>
                <CharacterButtonText>Eliminar</CharacterButtonText>
              </CharacterButton>
            </Character>
          )}
        />
      </ Container>
    );
  }
}