import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import NavBar from './Components/Navbar';
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" expanded={expanded} onToggle={toggleNav}>
        <Navbar.Brand href="#">JC's Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#menu" onClick={toggleNav}>Menu</Nav.Link>
            <Nav.Link href="#about" onClick={toggleNav}>About</Nav.Link>
            <Nav.Link href="#contact" onClick={toggleNav}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;

