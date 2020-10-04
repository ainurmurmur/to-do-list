import React from 'react';
import style from './List.module.css'
import ListMaping from './ListMaping'


let ListTwo = (props) => {

    let postsElement = props.lists.map((p, index) =>

        <div key={p.idOfPost}>
            <ListMaping index={index} post={p.postInList} id={p.idOfPost}
                        done={p.done} changeToDone={props.changeToDone}
                        changeIndex={props.changeIndex} removeToDoAC={props.removeToDoAC}
            />
        </div>
    );

    let onChange = (e) => {
        let newPostText = e.target.value;
        props.updateText(newPostText)
    };

    let onClick = () => {
        props.addPostToList()
    }

    return (
        <form>
            <div>
                <label className={style.label}>Tasks to do:</label>
                {postsElement}
                <input onChange={onChange} value={props.newPostText} className={style.input}
                       placeholder={'Your task'}/>
            </div>
            <button onClick={onClick} className={style.submit}>Add Item</button>
        </form>
    )
}

export default ListTwo;

