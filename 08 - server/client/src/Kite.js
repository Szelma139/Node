import React from "react";
import styled from "styled-components";
import { RightNav } from "./RightNav";

import "./Kite.css";

import { IoLogoJavascript as Logo } from "react-icons/io5";
import { AiFillAlert, AiFillFileImage, AiFillFilePpt  } from 'react-icons/ai';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #005a87;
  padding-left: 5%;
  padding-right: 5%;
  :nth-child(0) {
    width: 20%;
    padding-left: 20px;
  }
  li {
    padding: 5px 15px;

    a {
      color: #fff;
    }
  }
`;

const ToggleMenuOpen = styled.div`
  font-size: 2.2rem;
  display: none;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Kite = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Navbar>
        <li>
          <Logo size="2rem" color="white" />
        </li>
        <RightNav open={open} />
        <ToggleMenuOpen open={open} onClick={() => setOpen(!open)}>
          <li>
            <a>≡</a>
          </li>
        </ToggleMenuOpen>
      </Navbar>

      <div className="hero">
        <div className="hero-inner">
          <div>
            <h1>Your React information library</h1>
            <p>
              {" "}
              Tons of informations on internet buy most if it incomprehensible.
              If you also find it too hard maybe let's switch gears up and try
              different approach. My own approach.
            </p>
          </div>

          <img alt="hero" src="/Images/hero-Image.jpg" />
        </div>
      </div>
      <div className="background">
        <div className="grid-2">
          <div>
            <h1>Css mixins isn't a good idea!</h1>
            <p>
              While React gives huge diversity of options to choose from, amount
              of css frameworks is still astounding. Finding a way for someone
              beginning own journey in design world can be "interesting"
              experience.
            </p>
          </div>
          <div>
            <h1>Styled components for the rescue !!!</h1>
            <p>
              Styled components gives hope to those on the verge of joining dark
              side. But at some point even they might mix css objects arrays
              with css files together with styled components. That's when hydra
              will wake up, trying to swallow whole earth.{" "}
            </p>
          </div>
        </div>
      </div>




      <div className="background-2">
        <div className="grid-3">
          <div>
            <h1>Css mixins isn't a good idea!</h1>
            <p>
              While React gives huge diversity of options to choose from, amount
              of css frameworks is still astounding. Finding a way for someone
              beginning own journey in design world can be "interesting"
              experience.
            </p>
          </div>
          <div>
            <h1>Css mixins isn't a good idea!</h1>
            <p>
              While React gives huge diversity of options to choose from, amount
              of css frameworks is still astounding. Finding a way for someone
              beginning own journey in design world can be "interesting"
              experience.
            </p>
          </div>
          <div>
            <h1>Styled components compromises!!!</h1>
            <p>
              Styled components gives hope to those on the verge of joining dark
              side. But at some point even they might mix css objects arrays
              with css files together with styled components. 
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};
