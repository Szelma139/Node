import React from "react";
import styled from "styled-components";
import {
  AiFillGithub as GithubIcon,
  AiFillFacebook as FacebookIcon,
} from "react-icons/ai";

import { SiGmail as GmailIcon } from "react-icons/si";

const StyledFooter = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 3em 3em 15px 3em;

  margin: 0 auto;
`;

const FooterFoot = styled.div`
  padding-top: 40px;
`;

const ExternalWebsites = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  align-self: flex-start;
  margin: 0 auto;

  input {
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
  }
  div {
    margin-bottom: 2rem;
  }

  div li:nth-child(1) {
    font-weight: bold;
    padding: 1.5rem;
  }

  div li:not(:nth-child(1)) {
    color: #4a90e2;
    cursor: pointer;
    display: block;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0.5rem;
  }
`;

const ContactForm = styled.div`
  > * {
    display: block;
    width: 100%;
    border-bottom: 0, 4rem;
  }
`;

const SocialLinks = styled.ul`
  list-style-type: none;
  padding: 1.2em;
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;


  > * {
    flex-basis: 100%;
  }
  li > * {
    display: block;
    color: black;
    width: 100%;
    height: 100%;
    font-size: 1rem;
  }
`;

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <ExternalWebsites>
          <div>
            <li>Personal</li>
            <li>Blog</li>
            <li>Additionals</li>
            <li>Store</li>
          </div>
          <div>
            <li>
              <a src="#">Supporters</a>
            </li>
            <li>
              <a src="#">Articles</a>
            </li>
            <li>Hobby</li>
            <li>
              <a src="#">Interests</a>
            </li>
            <li>
              <a src="#">English</a>
            </li>{" "}
          </div>
          <div>
            <li>
              <a src="#">Website</a>
            </li>
            <li>
              <a src="#">About</a>
            </li>
            <li><a href="#">Website Map</a></li>
            <li>
              <a src="#">Contact</a>
            </li>
            <li>
              <a src="#">Privacy</a>
            </li>{" "}
          </div>
        </ExternalWebsites>
        <SocialLinks>
          <li>
            <a href="github.com">
              <GithubIcon size="1.5rem" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <FacebookIcon size="1.5rem" />
            </a>
          </li>
          <li>
            <a href="http://gmail.com">
              <GmailIcon size="1.5rem" />
            </a>
          </li>
        </SocialLinks>
        <FooterFoot>
          <li>Brought to you by John Doe, Expert of design. Made with love 2020</li>
        </FooterFoot>
      </StyledFooter>
    </>
  );
};
