import theme from '@assets/styles/Theme'
import RootStack, { navTheme } from '@navigation/RootStack'
import { NavigationContainer } from '@react-navigation/native'
import store from '@store/store'
import React from 'react'
import { StatusBar, Text, useColorScheme, View } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navTheme}>
          <RootStack />
          <StatusBar barStyle={'light-content'} />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
