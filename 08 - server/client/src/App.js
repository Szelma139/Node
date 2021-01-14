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
import { ToDoList } from "./Components/ToDoList";



import  UserPanel from './UserPanel'
import history from './history';


import {Router, Switch, Route, Link } from "react-router-dom";

import {IoIosArrowDropleft as ArrowBackIcon} from 'react-icons/io';

//TODO: Add browser history dynamic

const StyledUl = styled.ul`
    background-color: aliceblue;
    padding: 0;
  li {
    list-style-type: none;

    a{
      text-decoration: none;
      padding: 20px;
      font-size: 1.5rem;
      display: block;
      font-weight:400;
      background-color: skyblue;
      color: white;
     
    }

    a:hover {
      background-color: yellow;
      color: black;
      opacity: 0.8;
    }

    i > *{
      padding: 0 20px 0 20px;
=    }
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
                <Link to="/"><i><ArrowBackIcon/></i><i><ArrowBackIcon/></i><i><ArrowBackIcon/></i>Home <i><ArrowBackIcon/></i> <i><ArrowBackIcon/></i> <i><ArrowBackIcon/></i></Link>
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
            <Route exact path='/todo' component={ToDoList}/>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
