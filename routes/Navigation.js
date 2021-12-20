import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Account, Patient, Shift } from '../src/screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator initialRoutName="Shift">
      <Tab.Screen
        name="Account"
        component={Account}
        options={() => ({ headerShown: false })}
      />
      <Tab.Screen
        name="Patient"
        component={Patient}
        options={() => ({ headerShown: false })}
      />
      <Tab.Screen
        name="Shift"
        component={Shift}
        options={() => ({ headerShown: false })}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

export default Navigation