import React from 'react';
import style from './List.module.css'
import { Field, reduxForm} from 'redux-form'
import ListMaping from './ListMaping'
import {required} from 'redux-form-validators'


let ListForm = (props) => {


  
  
//(e) => {setChecked(e);

  let postsElement = props.lists.map((p,index) =>
    
    
    <div key={p.idOfPost}  >
      <ListMaping index={index} post={p.postInList} id={p.idOfPost} 
                  done={p.done} changeToDone={props.changeToDone}
                  changeIndex={props.changeIndex} removeToDoAC={props.removeToDoAC}
                  />
    </div>
  );
        
 
  //<form onSubmit={e => this.onSubmit(e, patient._id)}>
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className={style.label}>Tasks to do:</label>

        {postsElement}

        <Field name={"newPostText"} component={"input"} type={"text"} validate={[required()]} className={style.input} placeholder={'Your task'}/>
      </div>
      <button type={"submit"}  className={style.submit} >Add Item</button>
    </form>
  )
}

let List = reduxForm({
  form: 'newPostText'
})(ListForm)


export default List;
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


 /* <span>{index+1}</span> */
  /* onChange={props.lists.idOfPost}/> */
            /* <IndexFromSpan index={index}/> */
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