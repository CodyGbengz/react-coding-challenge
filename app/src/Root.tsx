import React from "react";
import { ThemeProvider } from "styled-components";

import App from "./App";
import theme from "./configs/theme";

export const ThemeContext = React.createContext<ITheme>({ theme })

const Root: React.FC = () => (
    <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme }}>
            <App />
        </ThemeContext.Provider>
    </ThemeProvider>
);

export default Root;
