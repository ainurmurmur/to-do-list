const ADD_POST = "ADD_POST"
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TASK = 'UPDATE_TASK'
const SET_STATE = 'SET_STATE'
const UPDATE_STATUS = 'UPDATE_STATUS'

let initialState = {

    lists: [
        {
            idOfPost: 1,
            postInList: 'Task',
            checked: false,
        }
    ],
}

let ListReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {

            let newPost = {
                idOfPost: state.lists.length + 1,
                postInList: action.newPostText,
                checked: false,
            }
            localStorage.setItem('todo', JSON.stringify({...state, lists: [...state.lists, newPost]}))
            return {...state, lists: [...state.lists, newPost]};
        }

        case UPDATE_TASK:

            let newLists = [...state.lists];
            let newList = {...newLists[action.index]};
            newList.postInList = action.task;
            newLists[action.index] = newList;

            localStorage.setItem('todo', JSON.stringify({...state, lists: newLists}))
            return {...state, lists: newLists};

        case UPDATE_STATUS:
            let newListsArr = [...state.lists];
            let newListObj = {...newListsArr[action.index]};
            newListObj.checked = action.checked;
            newListsArr[action.index] = newListObj;

            localStorage.setItem('todo', JSON.stringify({...state, lists: newListsArr}))
            return {...state, lists: newListsArr};

        case REMOVE_TODO: {
            const new_state ={ ...state,
                lists: [...state.lists.filter(newList => newList.idOfPost !== action.id)]}
            localStorage.setItem('todo', JSON.stringify(new_state))
            return new_state;
        }

        case SET_STATE: {

            const new_state = localStorage.getItem('todo')
            if(JSON.parse(new_state) == null) {
              return initialState
            }
            else{
                return JSON.parse(new_state)
            }
        }
        default:
            return state;
    }
}

export const addPostToList = (newPostText, id) => ({type: ADD_POST, newPostText, id})
export const removeToDoAC = (id) => ({type: REMOVE_TODO, id})
export const updateTask = (task, index) => ({type: UPDATE_TASK, task, index})
export const updateStatus = (checked, index) => ({type: UPDATE_STATUS, checked, index})
export const setState = () => ({type: SET_STATE})

export default ListReducer;
