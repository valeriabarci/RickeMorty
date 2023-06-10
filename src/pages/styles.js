import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #0d1117;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;

`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#000'
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
    color: #000;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #1a1a1a;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => props.loading ? 0.7 : 1};
`

export const List = styled.FlatList`
    margin-top: 20px;
`

export const Character = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`

export const ImageCharacter = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
`

export const CharacterButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #3498db;
    justify-content: center;
    align-items: center;
    height: 36px;

`

export const CharacterButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;

export const Card = styled.View`
    background: #161b22;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const CharacterData = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;

export const InfoTitle = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 10px;
    font-weight: bold;
    color: #999;
`;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const CharacterDetailsImg = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 50px;
    background: #eee;
`;

export const CharacterDetailsName = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    margin-top: 4px;
    text-align: center;
`;

export const CharacterDetailsOthers = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-top: 4px;
    text-align: center;
`;
