import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserContext";
import { FeedProvider } from "./context/FeedContext";
import { ThemeProvider } from "./context/ThemeContext";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <Provider store={store}>
      <UserProvider>
        <FeedProvider>
          <ThemeProvider>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </ThemeProvider>
        </FeedProvider>
      </UserProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
