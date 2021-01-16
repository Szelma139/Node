import React from 'react'
import styled from 'styled-components';

const StyledToDo = styled.div`
    border: 5px solid red;
    width:40%;
    margin: 0 auto;
    display:flex;
button{
padding: 1rem 2rem;
}

p {
    text-align: center;
}

`;

export const ToDo = ({id, title, text, deleteToDo}) => {
    return (
        <StyledToDo>
            <button onClick={()=>deleteToDo(id)}>Delete</button>
            id <h2>{id}</h2>
           title <h1>{title}</h1>
           text <p>{text}</p>
        </StyledToDo>
    )
}
