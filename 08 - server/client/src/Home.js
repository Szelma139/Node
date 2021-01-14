import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1%;
  text-align: center;
  margin: 50px;
  place-items: center;

  > * {
    min-height: 220px;
    min-width: 100%;
    border-radius: 5px;
    box-shadow: 3px 2px #3c4394;
  }

  li {
    list-style-type: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    background-color: #525dba;
    padding: 0;
    z-index: 1;
  
 

  }


  @keyframes anim {
    from {
      background-color: skyblue;
    }
    to {
      background: blue;
      border-radius: 25px;
      text-transform: capitalize;
    }
  }

  li:hover {
    animation: anim ease-in 0.6s both;
    cursor: pointer;
    background-color: blue;
  }

  li a {
    margin: 0;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    text-align: center;
    display: flex;
    width: 100%;

  }
`;

export const Home = () => {
  return (
    <>

<AwesomeSlider>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider>
    <Container>
      <li>
        <Link to="/users">users</Link>      </li>
      <li>
        <Link to="/github">github API </Link>
      </li>
      <li>
        <Link to="/fetch">fetch Test</Link>
      </li>
      <li>
        <Link to="/showcase">showcase</Link>
      </li>
      <li>
        <Link to="/pagination">pagination</Link>
      </li>
      <li>
    
        <Link to="/kite">kite</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>

      <li>
        <Link to="/todo">todo</Link>
      </li>
      {/* 
              <li>
                <Link to="/dupa">dupa</Link>
              </li> */}
    </Container>
    </> 
  );
};
