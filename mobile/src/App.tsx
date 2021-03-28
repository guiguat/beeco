import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import Button from './components/Button';
import FormField from './components/FormField';
import { Container } from './App.styles';
import { ThemeProvider } from './styles/styled-components';
import themes from './styles/theme';
import { useFonts as useArchivo, Archivo_400Regular, Archivo_600SemiBold} from '@expo-google-fonts/archivo';
import { useFonts as useSaira, Saira_400Regular, Saira_700Bold } from '@expo-google-fonts/saira';

export default function App() {
  const [archivoLoaded] = useArchivo({
    Archivo_400Regular, Archivo_600SemiBold
  });
  const [sairaLoaded] = useSaira({
    Saira_400Regular, Saira_700Bold
  });

  if (!archivoLoaded || !sairaLoaded) {
    return <ActivityIndicator size={'large'} color={themes.colors.yellow}/>;
  }
  return (
    <ThemeProvider theme={themes} >
      <Container>
        <StatusBar backgroundColor={themes.colors.white} barStyle={'dark-content'}/>
        <Button isOutline>
          Hello world
        </Button>
        <Button>
          Hello world
        </Button>
        <FormField secureTextEntry={true} 
                  defaultValue=""
                  onChangeText={(v) => console.log(v.trim() === "2")}
                  autoCompleteType={'password'}>
          Senha
        </FormField>
        <FormField keyboardType={'email-address'}
                   autoCompleteType={'email'}
                   onChangeText={console.log}>
          Email
        </FormField>
      </Container>
    </ThemeProvider>
  );
}
