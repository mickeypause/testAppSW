import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from '@screens/detail/Detail'
import Home from '@screens/home/Home'

const Stack = createStackNavigator()

export const navTheme = {
  dark: false,
  colors: {
    background: '#1A1A1A',
    card: '#1A1A1A',
    text: '#fff',
    primary: '#fff',
    notification: '#fff',
    border: '#FFE81F',
  },
}

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Detail'
        component={Detail}
        options={{
          headerShown: true,
          title: '',
          headerTintColor: '#FFE81F',
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStack
