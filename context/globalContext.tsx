import React, { useState } from "react";

type Props = {
    children: any;
}

interface StateContext {
    theme: string | null;
    themeSwitchHandler: (value: any) => void;
}

export const GlobalContext = React.createContext<StateContext>({
    theme: "light",
    themeSwitchHandler: () => { },
})


const GlobalContextProvider = (props: Props) => {
    const [currentTheme, setCurrentTheme] = useState(
        window.localStorage.getItem("theme") == null
        ? "light"
        : window.localStorage.getItem("theme"));


    const themeSwitchHandler = (themeType: any) => {
        console.log(themeType);
        setCurrentTheme(themeType);
    };

    return (
        <GlobalContext.Provider
            value={{
                theme: currentTheme,
                themeSwitchHandler: themeSwitchHandler
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );

}

export default GlobalContextProvider;