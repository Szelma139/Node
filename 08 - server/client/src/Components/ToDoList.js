import React, { useState } from "react";
import { ToDo } from "./ToDo";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {getToDoList} from '../redux/actions'

const StyledToDoContainer = styled.div`
  margin-top: 50px;
`;

export const ToDoList = () => {
  const [properties, setProperties] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProperties({
      ...properties,
      [e.target.name]: e.target.value,
    });
    console.log(properties);
  };



  const addToDo = () => {

    dispatch({ type: "ADD_TODO", payload: properties })

  };

  const deleteToDo = (id)=> {
dispatch({type: "DELETE_TODO", payload:id})  }

  const newTodos = useSelector((state) => state.todo);
  return (
    <div>
      <button onClick={()=>dispatch(getToDoList())}>Dispatch</button>
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

      {newTodos.map((element, kolejny) => (
        <>
          <ToDo title={element.title} text={element.text} id={element.id} deleteToDo={deleteToDo}/>
        </>
      ))}
    </div>
  );
};
