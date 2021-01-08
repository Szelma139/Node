import React from "react";
import styled from "styled-components";

const RowLinks = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: row;
    display: none;
  }
`;

const HiddenLinks = styled.div`
display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex":null)};
    width: 100vw;
    height: 180px;
    flex-direction: column;
    text-align: center;
    transform: translateY(15px);
  }

  li {
      padding: 5px;
      height: 20px;
  }

  a:hover {
    background-color: red;
    padding: 5px;
  }
`;

export const RightNav = ({ open }) => {
  return (
    <>
      <RowLinks open={open}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
        </RowLinks>
        <HiddenLinks open={open}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </HiddenLinks>
    </>
  );
};
