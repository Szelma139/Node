import React, { useState } from "react";
import { ToDo } from "./ToDo";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getToDoList, switchToDoState } from "../redux/actions";
import { useSpring, animated } from "react-spring";

const StyledToDoContainer = styled.div`
 margin: 0 auto;
  display: flex;
  width: 90%;

`;

const TabUnfinished = styled.div`
  background-color: white;
  color: black;
  padding: 1em;
    width: 50%;

  h2 {
    color: black;
  }

  h1{
    color: black;
  }
  p {
    color:black;
    display:block;
    
  }
`;

const TabCompleted = styled.div`
  background-color: rgb(68, 68, 68);
  color: white;
  padding: 1em;
    width: 50%;

  h1 {
    color: white;
  }
  p{
    color:white;
  }
`;

export const ToDoList = () => {
  const [properties, setProperties] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProperties({
      ...properties,
      [e.target.name]: e.target.value,
    });
  };

  const addToDo = () => {
    dispatch({ type: "ADD_TODO", payload: properties });
  };

  const checkFinished = (id) => {
    dispatch(switchToDoState(id));
  };

  const deleteToDo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const newTodos = useSelector((state) => state.todo);

  const props = useSpring({ x: 100, from: { x: 0 } });

  return (
    <div>
      <button onClick={() => dispatch(getToDoList())}>Dispatch</button>
      <button onClick={() => addToDo()}>Add To Do</button>
      <input
        onChange={(e) => handleChange(e)}
        placeholder="input title"
        name="title"
      />
      <input
        onChange={(e) => handleChange(e)}
        name="text"
        placeholder="input text"
      />
      <StyledToDoContainer>
        <TabUnfinished>
          <h1> Q ToDo </h1>
          {newTodos.map((element) => (element.finished===false ?  <ToDo
                key={element.id}
                title={element.title}
                text={element.text}
                id={element.id}
                finished={element.finished}
                color="black"
                deleteToDo={deleteToDo}
                checkFinished={checkFinished}
                textColor="black"

              /> : null)

          )}
        
        </TabUnfinished>
        <TabCompleted>
          <h1>Completed</h1>
          {newTodos.map((element) => (element.finished===true ?  <ToDo
                key={element.id}
                title={element.title}
                text={element.text}
                id={element.id}
                finished={element.finished}
                color="white"
                textColor="white"
                deleteToDo={deleteToDo}
                checkFinished={checkFinished}
              /> : null)

          )}
        </TabCompleted>
      </StyledToDoContainer>
    </div>
  );
};
