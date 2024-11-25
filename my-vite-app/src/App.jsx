// import { useState } from "react";
import { Outlet } from 'react-router-dom';
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
        </div>
    </div>
  );
}

export default App;
