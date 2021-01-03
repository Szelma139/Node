import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import { Home } from "./Home";
import { Github } from "./Github";
import { Fetch } from "./Fetch";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledUl = styled.ul`
  li {
    list-style-type: none;
    background-color: aliceblue;
  }
`;

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <StyledUl>
              <li>
                <Link to="/">Home</Link>
              </li>
     
            </StyledUl>
          </nav>

          <Switch>
            <Route path="/about"></Route>
            <Route path="/users"></Route>
            <Route exact path="/github"
                   component={Github}></Route>
            <Route exact path="/fetch"
                   component={Fetch}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
