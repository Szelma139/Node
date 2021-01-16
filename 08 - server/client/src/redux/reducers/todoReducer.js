const initialState = {

    todos: [
    {id:1, title:"wyrzucic smieci",text:"jutro o 18"},
    {id:2, title:"a bo ja wiem",text:"jutro o 22"},
    {id:3, title:"dac sobie siana",text:"22.01 o 15"},
    {id:4, title:"Nieprawda",text:"cos sie zjebalo i nie bylo mnie slychac o 15"}],
}

const returnNewId = (array)=> {
    if (array.length>0){
        return array.length+1;
    }
    else
    return 0;
}



const todoReducer =(state= initialState, action) => {
    console.log(state)
    switch(action.type){
        case 'GET_TODO_LIST':
            console.log(state);
        return state;
        case "ADD_TODO":
            const newObj = {id: returnNewId(state), title:action.payload.title,
                text:action.payload.text}
                var output = '';
                for (var property in newObj) {
                    output += property + ': ' + newObj[property]+'; ';
                  }
                  alert(output);
            return [
                ...state,
                newObj
               
            ]
            case 'DELETE_TODO':
                if (state.length===0) return null;
                const newState = state.filter((i)=>i.id!==action.payload)
                    return newState;

        default:
          return state.todos;

    };
}

export default todoReducer;