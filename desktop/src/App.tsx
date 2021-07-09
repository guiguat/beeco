import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ModalTeste from './modals/ModalTeste';
import Login from './pages/Login';
import Teste from './pages/Teste';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
          {/* <Route path="/" component={() => <Teste component={ModalTeste} />} /> */}
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}
