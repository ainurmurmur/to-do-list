import React from 'react';
import List from './List'
import { addPostToList, changeToDone, changeIndex, removeToDoAC } from '../BLL/ListReducer'
import { connect } from 'react-redux'
import { reset } from "redux-form";
// import { withRouter } from 'react-router-dom';
// import {compose} from 'redux'


export const ListContainer = (props) => {

  

  let submit = (values, dispatch, ) => {

    props.addPostToList(values.newPostText)
    dispatch(reset('newPostText'));
  }

  return <List lists={props.lists} addPostToList={props.addPostToList} changeIndex={props.changeIndex}
    changeToDone={props.changeToDone} onSubmit={submit} removeToDoAC= {props.removeToDoAC}
  />
}

let mapStateToProps = (state) => ({

  lists: state.toDoList.lists
})

export default connect(mapStateToProps, { addPostToList, changeToDone, changeIndex, removeToDoAC })(ListContainer)
//onSubmit={onSubmit}
