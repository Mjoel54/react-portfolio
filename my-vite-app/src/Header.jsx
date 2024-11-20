// import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    console.log("Header is rendering");
  return (
    <>
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 px-4 bg-slate border-bottom">
        <h1 className="m-0">Website Heading</h1>
        <Navbar />
      </header>
    </>
  );
}
