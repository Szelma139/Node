import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import { Home } from "./Home";
import { Github } from "./Github";
import { Fetch } from "./Fetch";

import { Router, Switch, Route, Link, useHistory } from "react-router-dom";
import history from './history';
import UserPanel from './UserPanel';


//TODO: Add browser history dynamic routing

const StyledUl = styled.ul`
  li {
    list-style-type: none;
    background-color: aliceblue;
  }
`;

function App() {
//  const history = useHistory();
  return (
    <div className="App">
      <Router history={history}>
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
            <Route exact path='/user/:name/:id' component={UserPanel}/>
         
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
