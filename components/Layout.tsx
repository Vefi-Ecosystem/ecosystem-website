import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { GlobalContext } from "../context/globalContext";

import { darkTheme, lightTheme } from '../themes';


export const GlobalStyle = createGlobalStyle`
  /* Light Mode */
  body {
    background-color:${(props: any) => props.theme.backgroundColor};
  }
`;

const Layout = (props:any) => {
    const currentTheme = useContext(GlobalContext);

    let theme;
    switch (currentTheme.theme) {
        case "dark":
            theme = darkTheme;
            break;
        case "light":
            theme = lightTheme;
            break;
        default:
            theme = lightTheme;
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <main>{props.children}</main>
        </ThemeProvider>
    )
}

export default Layout;