import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for dynamic route tracking
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("/");
  const location = useLocation(); // Get the current location from React Router

  useEffect(() => {
    // Update active section whenever the route changes
    setActiveSection(location.pathname);
  }, [location]); // Runs whenever the `location` changes

  return (
    <nav className="custom-link">
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="secondary"
          className={`btn-secondary ${activeSection === "/" ? "active" : ""}`}
        >
          <Link to="/" className="nav-link">About Me</Link>
        </Button>
        <Button
          variant="secondary"
          className={`btn-secondary ${activeSection === "/portfolio" ? "active" : ""}`}
        >
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </Button>
        <Button
          variant="secondary"
          className={`btn-secondary ${activeSection === "/resume" ? "active" : ""}`}
        >
          <Link to="/resume" className="nav-link">Resume</Link>
        </Button>
        <Button
          variant="secondary"
          className={`btn-secondary ${activeSection === "/contact" ? "active" : ""}`}
        >
          <Link to="/contact" className="nav-link">Contact</Link>
        </Button>
      </ButtonGroup>
    </nav>
  );
}
