import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Account, LoginUser, Register } from '../src/screens';

const Stack = createStackNavigator();

const AuthRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={Account}
      options={{ title: "Mi cuenta" }}
    />
    <Stack.Screen
      name="login"
      component={LoginUser}
      options={{ title: "Iniciar sesión" }}
    />
    <Stack.Screen
      name="register"
      component={Register}
      options={{ title: "Registro" }}
    />
  </Stack.Navigator>
)

export default AuthRoutes