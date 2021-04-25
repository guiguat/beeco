import React from 'react'
import { ActivityIndicator } from 'react-native'
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
    <ThemeProvider theme={themes}>
      <HomePage />
    </ThemeProvider>
  )
}
