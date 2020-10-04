import React from 'react';
import List from './List'
import {addPostToList, removeToDoAC, updateTask} from '../BLL/ListReducer'
import {connect} from 'react-redux'
import {reset} from "redux-form"


export const ListContainer = (props) => {

    let submit = (values, dispatch,) => {

        values.newPostText && props.addPostToList(values.newPostText)
        dispatch(reset('newPostText'));
    }

    return <List lists={props.lists} addPostToList={props.addPostToList}
                 removeToDoAC={props.removeToDoAC} newPostText={props.newPostText}
                 onSubmit={submit} updateTask={props.updateTask}
    />
}

let mapStateToProps = (state) => ({

    lists: state.toDoList.lists,
    newPostText: state.toDoList.newPostText
})

export default connect(mapStateToProps,
    {addPostToList, removeToDoAC, updateTask})
(ListContainer)

