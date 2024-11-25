// import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    console.log("Header is rendering");
  return (
    <>
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 px-4 bg-slate fixed-top">
      <h1 className="display-4 d-md-none">Mitchell Klein</h1>
      <h1 className="display-1 d-none d-md-block">Mitchell Klein</h1>
        <Navbar />
      </header>
    </>
  );
}
