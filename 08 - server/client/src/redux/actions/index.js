
export const addTodo = (todo) => {
    return {
        type:"ADD_TODO",
        payload:todo
    };
}


export const getToDoList = ()=> {
    return {
        type:"GET_TODO_LIST1"
    }
}