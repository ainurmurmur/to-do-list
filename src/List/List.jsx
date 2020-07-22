import React from 'react';
import style from './List.module.css'
import { Field, reduxForm} from 'redux-form'
import ListMaping from './ListMaping'
import {ButtonStyled} from '../Common/StylesMaterial'
import {TextFieldStyled} from '../Common/StylesMaterial'


const renderTextField = ({label,input, meta: { touched, invalid, error }, ...custom}) => {
  return <TextFieldStyled
     label={label}
     placeholder={label}
     error={touched && invalid}
     helperText={touched && error}
     {...input}
     {...custom}
   />
   
 }

let ListForm = (props) => {
 
  
  let postsElement = props.lists.map((p,index) =>
    
    
    <div key={p.idOfPost}  >
      <ListMaping index={index} post={p.postInList} id={p.idOfPost} 
                  done={p.done} changeToDone={props.changeToDone}
                  changeIndex={props.changeIndex} removeToDoAC={props.removeToDoAC}
                  />
    </div>
  );
        
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className={style.label}>Tasks to do:</label>
        {postsElement}

      <Field component={renderTextField}  name={"newPostText"} 
      id='custom-css-standard-input' label={'Your task'} />
     
      </div>
      <ButtonStyled type="submit">ADD ITEM </ButtonStyled>
    </form>
  )
}

let List = reduxForm({
  form: 'newPostText',
})(ListForm)


export default List;



 //<form onSubmit={e => this.onSubmit(e, patient._id)}>
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