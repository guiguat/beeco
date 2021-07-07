import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body, *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts.fontsize};
}

button:hover {
  transform: scale(1.02);
}

li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
`;

export default GlobalStyle;
