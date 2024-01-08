import React, {ChangeEvent, useState} from "react";
import c from "./Todolist.module.css";
import {Button, IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";

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
        <TextField
            size='small'
            variant='outlined'
            defaultValue="Small"
            value={title}
            onChange={onChangeTitleHandler}
            onKeyPress={keyPressHandler}
            error={!!error}
            label='Enter the title'
            helperText={error}
        />

        {/*<button onClick={addTaskHandler}> + </button>*/}
        <Button variant='contained' color='primary' size='medium' onClick={addTaskHandler}> + </Button>
    </div>
}