import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}
