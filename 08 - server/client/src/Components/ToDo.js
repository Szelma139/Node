import React from "react";
import styled from "styled-components";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid ${(props) => props.color};
  button {
    background-color: transparent;
    border: none;
    padding: 1rem 2rem;

    i {
      padding: 2em;
    }
  }
`;

const Title = styled.h2`
  margin: 0 auto;
  display: block;
  margin-bottom: 30px;
  padding: 1rem;
  width: 100%;
`;

const Item = styled.div`
  p {
    margin: 0 auto;
    color: ${(props) => props.textColor};
  }
`;
export const ToDo = ({
  id,
  title,
  text,
  deleteToDo,
  color,
  finished,
  checkFinished,
  textColor,
}) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>

      <Item textcolor={textColor}>
        <p>{text}</p>
        <div>
          <button onClick={() => deleteToDo(id)}>
            <DeleteIcon color={color} size="2.5em" />
          </button>
          <input
            type="checkbox"
            checked={finished}
            id="subscribeNews"
            name="subscribe"
            value="newsletter"
            onChange={() => checkFinished(id)}
          />
          <label htmlFor="subscribeNews">Completed</label>
        </div>
      </Item>
    </Container>
  );
};
