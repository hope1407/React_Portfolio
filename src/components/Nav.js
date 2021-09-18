import {NavLink} from "react-router-dom"

export default function Nav() {
  return (
    <header>
      <p className="name">John Hope</p>
      <nav>
        <ul>
          <NavLink to="/about" activeStyle={{color: 'red'}}>About Me</NavLink>
          <NavLink to="/work" activeStyle={{color: 'red'}}>Work</NavLink>
          <NavLink to="/contact" activeStyle={{color: 'red'}}>Contact Me</NavLink>
          <NavLink to="/resume" activeStyle={{color: 'red'}}>Resume</NavLink>
        </ul>
      </nav>
    </header>
  );
}
