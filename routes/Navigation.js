import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Icon } from "react-native-elements";
import globalStyles from '../src/styles/GlobalStyles';
import AuthRoutes from './AuthRoutes';
import ManagementRoutes from './ManagemenetRoutes';

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRoutName="Turnos"
      tabBarOptions={{
        inactiveTintColor: "#646464",
        activeTintColor: globalStyles.secondary.backgroundColor,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen
        name="Turnos"
        component={ManagementRoutes}
        options={() => ({ headerShown: false })}
      />
      <Tab.Screen
        name="Mi Cuenta"
        component={AuthRoutes}
        options={() => ({ headerShown: false })}
      />
    </Tab.Navigator>
  </NavigationContainer>
)
const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "Turnos":
      iconName = "compass-outline";
      break;
    case "Patient":
      iconName = "heart-outline";
      break;
    case "Mi Cuenta":
      iconName = "home-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}

export default Navigation