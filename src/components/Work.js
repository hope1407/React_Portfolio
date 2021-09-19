
export default function Work() {
    return (<section className="worklocation" id="worklink">
    <article>
      <div id="workheader">Work</div>
    </article>
    <article className="projects">
      <div id="bigproject">
        <a href="https://hope1407.github.io/Bike2Work/">
          <div id="projName">Bike2Work</div>
        </a>
      </div>

      <div className="smallprojects">
        <div className="sp" id="img1">
          <a href="https://hope1407.github.io/Password_Generator/">
            <div className="sPname">Password Generator</div>
          </a>
        </div>
        <div className="sp" id="img2">
          <a href="https://hope1407.github.io/Day_Planner/">
            <div className="sPname">Day Planner</div>
          </a>
        </div>
        <div className="sp" id="img3">
          <a href="https://young-harbor-83683.herokuapp.com/">
            <div className="sPname">Trivia Game</div>
          </a>
        </div>
        <div className="sp" id="img4">
          <a href="https://notestaker55.herokuapp.com/)">
            <div className="sPname">Note Taker</div>
          </a>
        </div>
      </div>
    </article>
    <article className="repos">
      <h1>Project Repositories</h1>
      <a href="https://github.com/hope1407/Bike2Work">
        <button className="repoBtn">Bike2Work</button>
        </a>
        <a href="https://github.com/hope1407/Password_Generator">
        <button className="repoBtn">Password Generator</button>
        </a>
        <a href="https://github.com/msteblu/CodingLand">
        <button className="repoBtn">Trivialympics</button>
        </a>
        <a href="https://github.com/hope1407/Day_Planner">
        <button className="repoBtn">Day Planner</button>
        </a>
        <a href="https://github.com/hope1407/Note_Taker2">
        <button className="repoBtn">Note Taker</button>
        </a>
    </article>
  </section>)
}