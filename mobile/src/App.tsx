import React, { useState } from 'react';
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

  const [warning, setWarning] = useState<string|undefined>();

  if (!archivoLoaded || !sairaLoaded) {
    return <ActivityIndicator size={'large'} color={themes.colors.yellow}/>;
  }
  return (
    //deixa os formfields desse jeito por enquanto pq 
    // a gente vai usar lib pra lidar com validação e erro e tals ai eu 
    // ja deixei preparada a mensagem funcionando e o required só serve pra
    // deixar bonitinho com o * colorido
    
    <ThemeProvider theme={themes} >
      <Container>
        <StatusBar backgroundColor={themes.colors.white} barStyle={'dark-content'}/>
        <Button isOutline>
          Hello world
        </Button>
        <Button 
        onPress={() => setWarning(v => v? undefined : "Ta certo essa porra nao")}>
          Clica pra dar warning
        </Button>
        <FormField keyboardType={'email-address'}
                   autoCompleteType={'email'}
                   onChangeText={console.log}
                   required>
          Email
        </FormField>
        <FormField secureTextEntry={true} 
                  autoCompleteType={'password'}
                  required>
          Senha
        </FormField>
        <FormField errorMessage={warning}>
          Senha2
        </FormField>
        
      </Container>
    </ThemeProvider>
  );
}
