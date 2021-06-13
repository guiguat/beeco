import React from 'react'
import { ThemeProvider } from './styles/styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import themes from './styles/theme'
import Signup from './pages/Signup'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Startup from './pages/Startup'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import { ActivityIndicator } from 'react-native'
import useAuth from './hooks/useAuth'
import Task from './pages/Task'
const Routes: React.FC = () => {
  const Stack = createStackNavigator()
  const { signed, loading } = useAuth()
  if (loading)
    return <ActivityIndicator size={'large'} color={themes.colors.yellow} />
  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {signed ? (
            <>
              <Stack.Screen name={themes.nav.home} component={HomePage} />
              <Stack.Screen name={themes.nav.profile} component={Profile} />
              <Stack.Screen
                name={themes.nav.editProfile}
                component={EditProfile}
              />
              <Stack.Screen name={themes.nav.task} component={Task} />
            </>
          ) : (
            <>
              <Stack.Screen name={themes.nav.startup} component={Startup} />
              <Stack.Screen name={themes.nav.login} component={Login} />
              <Stack.Screen name={themes.nav.signup} component={Signup} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes
