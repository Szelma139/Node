const initialState = {

    todos: [
    {id:1, title:"Wyrzucic smieci",text:"jutro o 18", finished:false},
    {id:2, title:"Chyba cos jeszcze bylo" ,text:"jutro o 22", finished:false},
    {id:3, title:"Nie przejmowac sie",text:"22.01 o 15", finished:true},
    {id:4, title:"Przypomniec sobie jeszcze",text:"Zgubilem gdzies",finished:true},
    {id:5, title:"Klucze ",text:"od samochodu",finished:false}
],
}

const returnNewId = (array)=> {
    if (array.length>0){
        return array.length+1;
    }
    else
    return 0;
}

const getBoolean=(obj)=>{
if(obj === null) return false;
    return !obj.finished;
}

const todoReducer =(state= initialState, action) => {
    console.log(state)
    switch(action.type){
        case 'GET_TODO_LIST':
        return state;
        case 'SWITCH_TODO':
            console.log("switch to do")
            if (state.length===0) return null;
            const newArray=state.map((object)=>{
                    return object.id===action.payload ? Object.assign({},object, {
                        finished:getBoolean(object)
                    }):object
                
              
            })

            return newArray;
        case "ADD_TODO":
            const newObj = {id: returnNewId(state), title:action.payload.title,
                text:action.payload.text, finished:false}
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