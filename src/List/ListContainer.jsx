import React from 'react';
import List from './List'
import { addPostToList, changeToDone, changeIndex, removeToDoAC } from '../BLL/ListReducer'
import { connect } from 'react-redux'
import { reset } from "redux-form"


export const ListContainer = (props) => {

  

  let submit = (values, dispatch, ) => {

    {values.newPostText && props.addPostToList(values.newPostText)}
    dispatch(reset('newPostText'));
  }

  

  return <List lists={props.lists} addPostToList={props.addPostToList} changeIndex={props.changeIndex}
    changeToDone={props.changeToDone}  removeToDoAC= {props.removeToDoAC} newPostText={props.newPostText}
    onSubmit={submit}
  />
}

let mapStateToProps = (state) => ({

  lists: state.toDoList.lists,
  newPostText: state.toDoList.newPostText
})

export default connect(mapStateToProps, 
  { addPostToList, changeToDone, changeIndex, removeToDoAC })
(ListContainer)

