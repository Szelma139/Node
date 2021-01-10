import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import { Home } from "./Home";
import { Github } from "./Github";
import { Fetch } from "./Fetch";
import { Showcase } from "./Showcase";
import { Pagination } from "./Pagination";
import { Kite } from "./Kite";
import { Footer } from "./Components/Footer/Footer";


import  UserPanel from './UserPanel'
import history from './history';


import {Router, Switch, Route, Link } from "react-router-dom";

//TODO: Add browser history dynamic

const StyledUl = styled.ul`
  li {
    list-style-type: none;
    background-color: aliceblue;
  }
`;

function App() {
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
            <Route exact path='/showcase' component={Showcase}/>
            <Route exact path='/pagination' component={Pagination}/>
            <Route exact path='/kite' component={Kite}/>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
