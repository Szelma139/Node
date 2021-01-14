const initialState = {

    todos: [{title:"wyrzucic smieci",text:"jutro o 18"},
    {title:"a bo ja wiem",text:"jutro o 22"},
    {title:"dac sobie siana",text:"22.01 o 15"},
    {title:"Nieprawda",text:"cos sie zjebalo i nie bylo mnie slychac o 15"}],
    oneTodo: {}
}

    


const todoReducer =(state= initialState, action) => {
    switch(action.type){
        case 'GET_TODO_LIST':
        return state.todos;
        case "ADD_TODO":
            const newObj = { title:state.title,
                text:state.text}
            return [
                ...state.todos,
                ...newObj
               
            ]
        default:
          return state.todos;

    };
}

export default todoReducer;