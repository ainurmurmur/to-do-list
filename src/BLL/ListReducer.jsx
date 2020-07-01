
const ADD_POST ="ADD_POST" 
const CHANGE_TO_DONE = 'CHANGE_TO_DONE'
const CHANGE_INDEX ='CHANGE_INDEX'
const REMOVE_TODO ='REMOVE_TODO'

let initialState = {

    lists: [{idOfPost: 1, postInList:"Reading", done: false},
            {idOfPost: 2, postInList:"Cooking", done: false}],
    
}
    
let ListReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_POST: {
            let newPost = {
                idOfPost: action.id, 
                postInList:action.newPostText, 
                done: false
            }
            return {...state, lists:[...state.lists, newPost] };
        }
        case REMOVE_TODO: {
            //return state.lists.filter(newList => newList.idOfPost !== action.id)
           return {...state, lists:[...state.lists.filter(newList => newList.idOfPost !== action.id)]};
        }

        default: 
            return state;
    }
}
//console.log(action.id)

export const addPostToList = (newPostText, id) => ( {type: ADD_POST, newPostText, id} )
export const changeToDone = (ids) => ( {type: CHANGE_TO_DONE, ids} )
export const changeIndex = (index) => ( {type: CHANGE_INDEX, index} )
export const removeToDoAC = (id) => ( {type: REMOVE_TODO, id} )

 
export default ListReducer;


 // }
        // case ADD_POST:
        // case CHANGE_TO_DONE:
        // case CHANGE_INDEX: {
        //     let newPost = {
        //         idOfPost: action.payload, 
        //         postInList:action.payload, 
        //         done: action.payload
        //     };
            
        //     return {...state, lists:[...state.lists, newPost], };

    // case CHANGE_TO_DONE: {
    //     return {...state, lists:[...state.lists,  {done:action.payload}]  };

    // }
    // case CHANGE_INDEX: {
    //     return {...state, lists:[...state.lists,  {idOfPost:action.payload}]  };

    // }
    // case ADD_POST: 
        // case CHANGE_INDEX: {
        //     let newPost = {
        //         idOfPost: action.index, 
        //         postInList:action.newPostText, 
        //         done: false
        //     }
        //     console.log(action.index)
        //     return {...state, lists:[...state.lists, newPost] };
        // }
        // case ADD_POST: {
        //     return {...state, lists:[...state.lists, { idOfPost:action.id, postInList: action.newPostText,  }]};
        // }
        // case CHANGE_TO_DONE: {
        //     if(state.lists.idOfPost === action.id ){
        //     let newPost = {
        //         idOfPost: action.id, 
        //         postInList:'jk', 
        //         done: true
        //     }
        //     return {...state, lists:[...state.lists, newPost] };}
        // }
        // case CHANGE_TO_DONE: {
        //     let stateCopy ={...state}
        //     stateCopy.lists = [...state.lists]
        //     stateCopy.lists.map( newList =>{
        //         if ( state.lists.idOfPost === action.id ){
        //             newList.done =!newList.done
        //         }
        //         return newList;
        //     })
        // } 