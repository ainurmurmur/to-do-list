import React, {useState, useEffect} from 'react';
import style from './List.module.css'
import cn from 'classnames'
import IconButton from '@material-ui/core/IconButton';
import {ButtonDeleteStyled} from '../Common/StylesMaterial'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import 'fontsource-roboto';
import TextField from '@material-ui/core/TextField';


let ListMaping = ({index, ...props}) => {

    let [notChecked, Checked] = useState(props.done);

    const setChecked = (e) => {
        Checked(e.target.checked)
    }

    const removeToDo = (id) => {
        props.removeToDoAC(id)
    }

    let [editMode, setEditMode] = useState(false);
    let [task, setTask] = useState(props.post);

    useEffect(() => {
        setTask(props.post)
    }, [props.post])

    let activateEditMode = () => {

        setEditMode(true);
    }

    let deactivateEditMode = (task, index) => {

        setEditMode(false);
        props.updateTask(task, index)
    }

    let onTaskChange = (e) => {

        setTask(e.currentTarget.value);
    }

    return <>

        <ul className={style.ul}>
            <li className={cn(style.li, {[style.done]: notChecked === true})}>
      <span className={style.span}>
      <FormControlLabel
          control={<Checkbox checked={notChecked} onChange={(e) => setChecked(e)}/>}
      />
      <div className={style.index}>{index + 1}</div>
      <div>
            {!editMode &&
            <span onDoubleClick={activateEditMode} className={style.post}>{props.post}</span>
            }{editMode &&
      <TextField id="standard-basic" color={"secondary"} onBlur={() => deactivateEditMode(task, index)} autoFocus={true}
                 onChange={onTaskChange} value={task}></TextField>
      }
   </div>
      </span>
                <IconButton aria-label="delete" onClick={() => removeToDo(props.id)}>
                    <ButtonDeleteStyled fontSize="small"/>
                </IconButton>
            </li>
        </ul>
    </>
}

export default ListMaping;