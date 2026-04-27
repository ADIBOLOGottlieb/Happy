import { useState, useEffect } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Happy GAZOZO</div>
      <div className="nav-links">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#stats">Stats</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
