import React, { Component } from "react";
import {  Container, Header, CharacterDetailsOthers, CharacterDetailsImg, CharacterDetailsName } from "./styles";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Character extends Component {

    render() {
        const { route } = this.props;
        const { character } = route.params;

        return (
            <Container>
                <Header>
                    <CharacterDetailsImg source={{ uri: character.image }} />
                    <CharacterDetailsName>{character.name}</CharacterDetailsName>
                    <CharacterDetailsOthers>{character.status == 'Alive' ? <Icon name='circle' size={10} color='#0f0' /> : (character.status == 'Dead' ? <Icon name='circle' size={10} color='#f00' /> : <Icon name='circle' size={10} color='#808080' />)} {character.status} - {character.species}</CharacterDetailsOthers>
                    <CharacterDetailsOthers>{character.location}</CharacterDetailsOthers>
                    <CharacterDetailsOthers>{character.episode}</CharacterDetailsOthers>
                </Header>
            </Container>
        );
    }
}