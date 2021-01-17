
export const addTodo = (todo) => {
    return {
        type:"ADD_TODO",
        payload:todo
    };
}


export const getToDoList = ()=> {
    return {
        type:"GET_TODO_LIST"
    }
}


export const switchToDoState = (finished)=>{
    return {
        type:"SWITCH_TODO",
        payload:finished
    }
}


export const deleteToDo = (id) => {
    return {
        type:"DELETE_TODO",
        payload: id
    }
}