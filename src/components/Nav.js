import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <header>
      <p className="name">John Hope</p>
      <nav>
        <ul>
          <Link to="/">About Me</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact Me</Link>
          <Link to="/resume">Resume</Link>
        </ul>
      </nav>
    </header>
  );
}
