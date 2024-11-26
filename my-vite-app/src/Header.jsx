// import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    console.log("Header is rendering");
  return (
    <>
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-center py-4 px-4 bg-slate fixed-top text-white">
      <h1 className="h1 px-4">Mitchell Klein</h1>
     
        <Navbar />
      </header>
    </>
  );
}
