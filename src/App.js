import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header.js";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
