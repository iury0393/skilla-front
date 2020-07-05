import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserContext";
import { FeedProvider } from "./context/FeedContext";
import { ThemeProvider } from "./context/ThemeContext";
import { store } from "./redux/store";

render(
  <Provider store={store}>
    <UserProvider>
      <FeedProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FeedProvider>
    </UserProvider>
  </Provider>,
  document.getElementById("root")
);
