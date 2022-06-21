import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./state/store.jsx";
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0a1929",
    },
    secondary: {
      main: "#6f7598",
      color: "#",
      light: "#00FFFFFF",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
