import "./App.css";
//import Homepage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/homepage"
import Profile from "./components/Profile";
import Work from "./components/Work"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <Profile />
        </Route>
        <Route exact path="/work">
          <Work/>
        </Route>
        <Route exact path="/contact">
          <Footer />
          </Route>
        <Route exact path="/resume">{"resume"}</Route>
      </Switch>

      {/* <Homepage /> */}
    </Router>
  );
}

export default App;
