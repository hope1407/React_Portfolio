import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import Pdf from '../Resume/Resume.pdf';

export default function Nav() {
  return (
    <div>
      <header>
        <Link to="/">
        <p className="name">John Hope</p>
        </Link>
      <nav>
        <ul>
          <NavLink to="/about" activeStyle={{color: '#ff9b42'}}>About Me</NavLink>
          <NavLink to="/work" activeStyle={{color: '#ff9b42'}}>Work</NavLink>
          <NavLink to="/contact" activeStyle={{color: '#ff9b42'}}>Contact Me</NavLink>
          <a target="_blank" rel="noopener noreferrer" href = {Pdf} activeStyle={{color: '#ff9b42'}}>Resume</a>
        </ul>
      </nav>
    </header>
    <section class="buffer">
        <div id="tagline">Full Stack Web Developer</div>
      </section>
    </div>
    
  );
}
