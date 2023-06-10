import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Login from './pages/login';
import SignUp from './pages/signup';
import Character from './pages/character';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{
          title:'',
          headerTitleAlign: 'center',
          headerTintColor: '#F0F2EB',
          headerStyle: {
            backgroundColor: '#161b22'
          },
          headerTitleStyle: {
            color: '#86fc17',
            fontWeight: 'bold'
          }
        }}/>
        <Stack.Screen name="main" component={Main} options={{
          title: 'PERSONAGENS',
          headerTitleAlign: 'center',
          headerTintColor: '#F0F2EB',
          headerStyle: {
            backgroundColor: '#161b22',
          },
          headerTitleStyle: {
            color: '#86fc17',
            fontWeight: 'bold',
          }
        }}/>

        <Stack.Screen name="signup" component={SignUp} options={{
          title: 'CADASTRO',
          headerTitleAlign: 'center',
          headerTintColor: '#F0F2EB',
          headerStyle: {
            backgroundColor: '#161b22',
          },
          headerTitleStyle: {
            color: '#86fc17',
            fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name='character' component={Character} options={{
          title: 'DADOS DO PERSONAGEM',
          headerTitleAlign: 'center',
          headerTintColor: '#F0F2EB',
          headerStyle: {
            backgroundColor: '#161b22'
          },
          headerTitleStyle: {
            color: '#86fc17',
            fontWeight: 'bold',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
