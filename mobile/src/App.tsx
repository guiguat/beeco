import React from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from './styles/styled-components'
import themes from './styles/theme'
import {
  useFonts as useArchivo,
  Archivo_400Regular,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'

import {
  useFonts as useSaira,
  Saira_400Regular,
  Saira_700Bold,
} from '@expo-google-fonts/saira'

import Signup from './pages/Signup'
import HomePage from './pages/HomePage'
import Task from './pages/Task'
import Login from './pages/Login'
import Startup from './pages/Startup'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

const Pilha = createStackNavigator()

export default function App() {
  const [archivoLoaded] = useArchivo({
    Archivo_400Regular,
    Archivo_600SemiBold,
  })

  const [sairaLoaded] = useSaira({
    Saira_400Regular,
    Saira_700Bold,
  })

  if (!archivoLoaded || !sairaLoaded) {
    return <ActivityIndicator size={'large'} color={themes.colors.yellow} />
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={themes}>
        <Pilha.Navigator
          initialRouteName={themes.nav.startup}
          screenOptions={{ headerShown: false }}
        >
          <Pilha.Screen name={themes.nav.startup} component={Startup} />
          <Pilha.Screen name={themes.nav.login} component={Login} />
          <Pilha.Screen name={themes.nav.signup} component={Signup} />
          <Pilha.Screen name={themes.nav.home} component={HomePage} />
          <Pilha.Screen name={themes.nav.profile} component={Profile} />
          <Pilha.Screen name={themes.nav.editProfile} component={EditProfile} />
          <Pilha.Screen name={themes.nav.task} component={Task} />
        </Pilha.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}
