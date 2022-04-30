import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { GlobalContext } from '../context/globalContext';

import { darkTheme, lightTheme } from '../themes';

export const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  /* Light Mode */
  body {
    margin:0;
    padding:0;
    background-color:${(props: any) => props.theme.backgroundColor};
  }
  h1{
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
  }
  @media screen and (max-width:1024px){
    h1{
      font-size: 80px;
    }
  }

  /* Fonts */
  @font-face {
    font-family: Gilroy-Medium;
    src: url(/fonts/Gilroy/Gilroy-Medium.ttf);
  }
  
  @font-face {
    font-family: Gilroy-Bold;
    src: url(/fonts/Gilroy/Gilroy-Bold.ttf);
  }
  
  @font-face {
    font-family: Gilroy-Semibold;
    src: url(/fonts/Gilroy/Gilroy-SemiBold.ttf);
  }
  
  @font-face {
    font-family: Gilroy-Extra;
    src: url(/fonts/Gilroy/Gilroy-ExtraBold.ttf);
  }
  
  @font-face {
    font-family: "Gilroy-Black";
    src: url(/fonts/Gilroy/Gilroy-Black.ttf);
  }

  @font-face {
    font-family: "Gilroy-ExtraBold";
    src: url(/fonts/Gilroy/Gilroy-ExtraBold.ttf);
  }

  @font-face {
    font-family: "Gilroy-Heavy";
    src: url(/fonts/Gilroy/Gilroy-Heavy.ttf);
  }
`;

const Layout = (props: any) => {
  const currentTheme = useContext(GlobalContext);
  const theme = currentTheme.theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{props.children}</main>
    </ThemeProvider>
  );
};

export default Layout;
