import React, {ChangeEvent, useState} from "react";
import c from "./Todolist.module.css";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}
export const AddItemForm: React.FC<AddItemFormPropsType> = ({addItem}) => {
    let [title, setTitle] = useState('');
    let [error, setError] = useState<null | string>(null);
    const addTaskHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle("")
        } else {
            setError('Title is not required')
        }
    };
    const keyPressHandler = () => {
        setError(null)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return <div>
        <input value={title}
               onChange={onChangeTitleHandler}
               onKeyPress={keyPressHandler}
               className={error ? c.error : ""}/>
        <button onClick={addTaskHandler}> + </button>
        {error ? <div className={c.error_message}> Field is required </div> : ''}
    </div>
}