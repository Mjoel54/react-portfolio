import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Navbar() {
  return (
    <nav className="custom-link">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" className="btn-secondary">
          <Link to="/" className="nav-link">About Me</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/resume" className="nav-link">Resume</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/contact" className="nav-link">Contact</Link>
        </Button>
      </ButtonGroup>
    </nav>
  );
}
