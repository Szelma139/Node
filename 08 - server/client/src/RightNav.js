import React from "react";
import styled from "styled-components";

const RowLinks = styled.ul`
  list-style: none;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: row;
    display: none;
  }

  a{
    text-decoration: none;
    padding: 15px;
    color: white;
    display: block;
    font-family: 'Work Sans', sans-serif;



  }
  a:hover {
      display: block;
    background-color: #65BEE0;
    text-decoration: none;
  }

`;

const HiddenLinks = styled.div`
display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex":null)};
    width: 100vw;
    height: 230px;
    flex-direction: column;
    text-align: center;
    transform: translateY(15px);
  }
  li {
      padding: 10px;
      height: 20px;
      width: 100%;

  }

  a{
    text-decoration: none;
    padding: 5px;
    color: white;
    display: block;


  }
  a:hover {
      display: block;
    background-color: #65BEE0;
    padding: 5px;
    text-decoration: none;
  }
`;

export const RightNav = ({ open }) => {
  return (
    <>
      <RowLinks open={open}>
      <li>
          <a href="#">Articles   <span class="iconify" data-icon="entypo-chevron-thin-down" data-inline="false"></span></a>
        
        </li>
        <li>
          <a href="#">About U   <span class="iconify" data-icon="entypo-chevron-thin-down" data-inline="false"></span></a>
        </li>
        <li>
          <a href="#">Contact Us   <span class="iconify" data-icon="entypo-chevron-thin-down" data-inline="false"></span></a>
        </li>
        <li>
          <a href="#">Sign In </a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>

        </RowLinks>
        <HiddenLinks open={open}>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
        </HiddenLinks>
    </>
  );
};