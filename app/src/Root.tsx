import React from "react";
import { ThemeProvider } from "styled-components";

import App from "src/App";

import theme from "src/configs/theme";

const Root: React.FC = () => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

export default Root;
