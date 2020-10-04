const ADD_POST = "ADD_POST"
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TASK = 'UPDATE_TASK'

let initialState = {

    lists: [
        {
            idOfPost: 1,
            postInList: 'Task',
        }
    ],
}

let ListReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                idOfPost: state.lists.length + 1,
                postInList: action.newPostText,
            }
            return {...state, lists: [...state.lists, newPost]};
        }
        case UPDATE_TASK:

            let newLists = [...state.lists];
            let newList = {...newLists[action.index]};
            newList.postInList = action.task;
            newLists[action.index] = newList;
            return {...state, lists: newLists};

        case REMOVE_TODO: {

            return {...state,
                lists: [...state.lists.filter(newList => newList.idOfPost !== action.id)]};
        }
        default:
            return state;
    }
}

export const addPostToList = (newPostText, id) => ({type: ADD_POST, newPostText, id})
export const removeToDoAC = (id) => ({type: REMOVE_TODO, id})
export const updateTask = (task, index) => ({type: UPDATE_TASK, task, index})

export default ListReducer;

// case CHANGE_TO_DONE: {

//     if(state.lists[action.id-1]['idOfPost'] === action.id){

//       return {...state, lists: [...state.lists[action.id-1]['done'] = true ] };
//     }
