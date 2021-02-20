import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { HeaderTop } from "./components/HeaderTop/HeaderTop";
import { Header } from "./components/Header/Header";
import { Routes } from "./components/Routes/Routes";

export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <HeaderTop />
            <Header />
            <Routes />
          </ScrollToTop>
        </Router>
      </Provider>
    </div>
  );
};
