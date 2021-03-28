import React from 'react';
import { ThemeProvider } from './styles/styled-components';
import themes from './styles/theme';

// import Button from './components';

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      
    </ThemeProvider>
  );
}
