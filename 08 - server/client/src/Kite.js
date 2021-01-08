import React from "react";
import styled from "styled-components";
import { RightNav } from "./RightNav";

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #005a87;

  :nth-child(0) {
    width: 20%;
    padding-left: 20px;
  }
  li {
    list-style-type: none;
    padding: 5px 15px;
    color: #fff;
  }
`;

const ToggleMenuOpen = styled.div`
  font-size: 2rem;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledButton = styled.button`
  font-size: 22px;
  margin-top: 10px;
`;

export const Kite = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Navbar>
        <li>kite</li>
        <RightNav open={open} />
        <ToggleMenuOpen open={open} onClick={() => setOpen(!open)}>
          <li>
            <a>≡</a>
          </li>
        </ToggleMenuOpen>
      </Navbar>
      <StyledButton>{open.toString()}</StyledButton>
    </>
  );
};
