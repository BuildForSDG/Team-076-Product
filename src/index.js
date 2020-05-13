import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ReduxStoreConfig } from "./store/ReduxStoreConfig";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    green: {
      900: "#31C28C",
      800: "#57B894",
      700: "#75DFB8",
    }
  },
};

const store = ReduxStoreConfig();

console.log(store.getState());

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  </ThemeProvider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
