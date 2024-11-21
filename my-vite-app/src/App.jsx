// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AboutMe from "./AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AboutMe />
      </BrowserRouter>
    </>
  );
}

export default App;
