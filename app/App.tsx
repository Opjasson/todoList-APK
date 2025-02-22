import React from 'react'
import {
    NavigationContainer,
    NavigationIndependentTree,
    useNavigation,
    createStaticNavigation,
} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './pages/Home';
import List from './pages/List';
import { StatusBar } from 'react-native';
const App = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='List' component={List} />
    </Stack.Navigator>
  )
}

export default App
