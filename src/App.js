import "./App.css";
//import Homepage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Work from "./components/Work";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/React_Portfolio/">
          <Profile />
        </Route>
        <Route exact path="/about">
          <Profile />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
