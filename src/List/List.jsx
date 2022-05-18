import React from 'react';
import style from './List.module.css'
import {Field, reduxForm} from 'redux-form'
import ListMaping from './ListMaping'
import {ButtonStyled} from '../Common/StylesMaterial'
import {TextFieldStyled} from '../Common/StylesMaterial'
import logo from '../Common/mylogos.png'


const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => {

    return (<TextFieldStyled
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
}

let ListForm = (props) => {

    let postsElement = props.lists.map((p, index) =>

        <div key={p.idOfPost}>
            <ListMaping index={index} post={p.postInList} id={p.idOfPost} checked={p.checked}
                        changeIndex={props.changeIndex} removeToDoAC={props.removeToDoAC}
                        addPostToList={props.addPostToList} updateTask={props.updateTask}
                        updateStatus={props.updateStatus}
            />
        </div>
    );

    const {handleSubmit, submitting} = props;

    return (
        <div>
            <div><img src={logo} alt={'logo'} className={style.logo}/></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={style.label}>Tasks to do:</label>
                    {postsElement}

                    <Field component={renderTextField} name={"newPostText"}
                           id='custom-css-standard-input' label={'Your task'}/>
                </div>
                <ButtonStyled type="submit" disabled={submitting}>ADD ITEM </ButtonStyled>
            </form>
        </div>
    )
}

let List = reduxForm({
    form: 'newPostText',
})(ListForm)

export default List;

