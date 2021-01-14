import React, { useState } from "react";
import { ToDo } from "./ToDo";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const StyledToDoContainer = styled.div`
  margin-top: 50px;
`;

//zaimportowac akcje do tego pliku i wyslac dispatchem
//dispatch(addToDo(todo)); //payloadem jest jeden element, konkretny obiekt dodawany - computed property

export const ToDoList = () => {
  const [index, setIndex] = useState(0);
  const [todosList, setTodosList] = useState([]);
  const [properties, setProperties] = useState({});
  const dispatch = useDispatch();

  // const addToDo = () => {
  //   const newObject = { index, ...properties };
  //   console.log("new obj" + newObject.index);
  //   setTodosList([newObject, ...todosList]);
  //   setIndex(index + 1);
  //   //console.log(todosList?[0].index)
  // };

  // const handleDelete = (id) => {
  //   const newObject = todosList.filter((todos) => todos.index !== id);
  //   console.log(`Deleting todo with id of ${id}`);
  //   //console.log(`Deleting todo with id of ${id} where in object iw was ${todos.index}`)
  //   setTodosList(newObject);
  // };

   const handleChange = (e) => {
  //   // todosList.map((element, index) => (
  //   // console.log(`${element.title} ${element.text} ${element.id}`))
  //   console.log(e.target.value);
  //   let currentProp = e.target.value;

  //   setProperties({ ...properties, [e.target.name]: currentProp });
  // };
  const handleChange = (e) => {
    
     let currentProp = e.target.value;
  
    //   setProperties({ ...properties, [e.target.name]: currentProp });
    // };

  const newTodos = useSelector((state) => state.todo);
  return (
    <div>
      {/* <button onClick={() => addToDo()}>Add To Do</button> */}
      <button onClick={() => dispatch({type:"ADD_TODO"})}>Add To Do</button>
      <input
        // onChange={(e) => handleChange(e)}
        placeholder="input title"
        name="title"
      />
      <input
        // onChange={(e) => handleChange(e)}
        name="text"
        placeholder="input text"
      />

      {/* <StyledToDoContainer>
        Props title <h2>{properties?.title}</h2>
        Props text <h2>{properties?.text}</h2>
        Props id <h2>{index}</h2>
      </StyledToDoContainer>
      <StyledToDoContainer>
        {todosList.map((element, kolejny) => (
          <>
            <ToDo
              title={element.title}
              text={element.text}
              id={element.index}
              handleDelete={handleDelete}
            />
          </>
        ))}
      </StyledToDoContainer> */}

      {newTodos.map((element, kolejny) => (
          <>
            <ToDo
              title={element.title}
              text={element.text}
            />
          </>
        ))}

    </div>
  );
};
