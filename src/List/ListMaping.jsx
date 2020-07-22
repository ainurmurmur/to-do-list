import React, { useState } from 'react';
import style from './List.module.css'
import cn from 'classnames'
import IconButton from '@material-ui/core/IconButton';
import {ButtonDeleteStyled} from '../Common/StylesMaterial'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import 'fontsource-roboto';

let ListMaping = ({ index, ...props }) => {

  let [notChecked, Checked] = useState(props.done);

  const setChecked = (e) => {
    Checked(e.target.checked)
    console.log(notChecked)
    // props.changeToDone(props.id)
  }
 
  const removeToDo =(id) => {
    props.removeToDoAC(id)
  }
  
  return <>
  
  <ul className={style.ul}>
    <li className={cn(style.li, { [style.done]: notChecked === true })}>
      <span className={style.span}>

      <FormControlLabel
        control={<Checkbox checked={notChecked} onChange={(e) => setChecked(e) }/>}
        />

      <div className={style.index}>{ index + 1}</div>
      <div className={style.post}>{props.post}</div>
      </span>
      {/* <button className={style.delete} onClick={()=>removeToDo(props.id)} type={'button'}>&times;</button> */}
      <IconButton aria-label="delete"  onClick={()=>removeToDo(props.id)}>
          <ButtonDeleteStyled fontSize="small" />
        </IconButton>
    </li>
   
  </ul>
  </>
}

export default ListMaping;


/* <input className={style.checkbox}
        type={"checkbox"}
        checked={notChecked}
        onChange={(e) => setChecked(e) }

      /> */
// console.log(props.id)
  //(e) => { setChecked(e); setCheckedId(props.id); MyNewFunc(props.done)}
// {props.addPostActionCreator(props.id)}

// let [notChecked, Checked] = useState();



// const setChecked = (e) => { 
//     Checked(e.target.checked)
//     console.log(notChecked)
// }   
// const setCheckedId = (id ) => { 

//   props.changeToDone(id)
//   console.log(id);
// }  
// const MyNewFunc = (isDone) => { 
//   let doneOrNor= isDone
// } 

// //(e) => {setChecked(e);

//   let postsElement = props.lists.map((p,index) =>
//     <div key={p.id}  >
//       <ul className={style.ul}>
//         <li  className={ cn (style.li, {[style.done]:notChecked === true})}>
//           <input className={style.checkbox}
//                  type={"checkbox"} 
//                  checked={notChecked} 
//                  onChange={(e) => {  setChecked(e); setCheckedId(p.idOfPost); MyNewFunc(p.done)}}

//                  /> 

//                  {p.idOfPost = index+1}
//                  {p.postInList}

//         </li>
//       </ul>
//     </div>
//   );


//   const { handleSubmit } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Tasks to do</label>

//         {postsElement}

//         <Field name={"newPostText"} component={"input"} type={"text"} />
//       </div>
//       <button type={"submit"}  >Add Item</button>
//     </form>
//   )
// }

// let List = reduxForm({
//   form: 'newPostText'
// })(ListForm)
//let classes = [];

// let setChecked = ({ target: { checked } } )=> {
//   Checked(checked);
//   console.log(notChecked, checked);

// };

// const [checked, setChecked] = useState(true);
// return (
//   <div>
//     <label>
//       <MixedCheckbox
//         value="whatever"
//         checked={checked}
//         onChange={(event) => {
//           setChecked(event.target.checked);
//         }}

//  const setChecked = ({ target: { checked } } ) => { 

//   (event) => {
//     Checked(event.target.checked)

//   Checked(checked);
//   console.log(notChecked, checked);




// return <span className={ cn({[classes.selectedPage]:props.currentPage === p},classes.pageNumber ) } onClick={(e) => { props.onPageChange(p) } }>{p}</span>

// const [x, setX] = useState(false);

// const soldCheckbox = ({ target: { checked } }) => {
//   console.log(x, checked);
//   setX(checked);
// };

//   <div>
//     <input type="checkbox" checked={x} onChange={soldCheckbox} />
//   </div>

// if (checked) { 
//   classes.push('done')
// }
// props.lists.map((checkedPost) => (  {checkedPost.done} );


{/* <span>{index+1}</span> */ }
{/* onChange={props.lists.idOfPost}/> */ }
{/* <IndexFromSpan index={index}/> */ }
  // let IndexFromSpan =({index}) => {
  //   return (<span>{index+1}</span>)
  // }
  // let indexNew = (index) => {
  //   props.changeIndex(index)
  // }
 //className={style.li}  className={ style.done }
  //className={style.li}
  //className={classes.join(' ')

//onSubmit={handleSubmit}

// const List = reduxForm({
//   form: 'edit-profile'
// })(ListReduxForm);

//{createField('listItem', 'Place your Item here', Input)}

// const List = (props) => {


// let postsElement = props.lists.map((p) =>  
//       <div key={p.id}>
//       <b className={style.text}>{p.postInList} </b></div>
//        );

//   let onPostChange = (e) => {
//     let newPostText= e.currentTarget.value;
//     props.addPostToList(newPostText)

//   }

//   return <>
//       <div>

//       {postsElement}
//       <form >
//       <input  onChange={onPostChange}  placeholder='Write your Item'   value ={props.newPostText} />
//        <button > Send </button>
//        </form>
//        </div>
//   </>

// }