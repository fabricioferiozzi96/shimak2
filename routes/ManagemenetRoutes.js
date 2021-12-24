import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Account, Patient, Shift } from '../src/screens';

const Stack = createStackNavigator();

const ManagementRoutes = () => (

  <Stack.Navigator initialRoutName="Turnos">
    <Stack.Screen
      name="Account"
      component={Account}
      options={() => ({ headerShown: false })}
    />
    <Stack.Screen
      name="Patient"
      component={Patient}
      options={() => ({ headerShown: false })}
    />
    <Stack.Screen
      name="Turnos"
      component={Shift}
      options={() => ({ headerShown: false })}
    />
  </Stack.Navigator>
)

export default ManagementRoutes