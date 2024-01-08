    import React, {ChangeEvent, useState} from "react";
    import {TextField} from "@mui/material";

    type editableSpanPropsType = {
        title: string
        changeTitle: (newTitle: string) => void
    }


    export const EditableSpan: React.FC<editableSpanPropsType> = ({title, changeTitle}) => {
        let [editMode, setEditMode] = useState(false)
        let [editableSpanTitle, setEditableSpanTitle] = useState("")

        const activateMode = () => {
            setEditMode(true)
            setEditableSpanTitle(title)
        }
        const deActivateMode = () => {
            setEditMode(false);
            changeTitle(editableSpanTitle)
        }
        const onChangeSpanHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setEditableSpanTitle(e.currentTarget.value)
        }
        return editMode ?
            <TextField size='small' value={editableSpanTitle} onChange={onChangeSpanHandler} onBlur={deActivateMode} />
           /* <input autoFocus value={editableSpanTitle} onChange={onChangeSpanHandler} onBlur={deActivateMode} />*/ :
            <span onDoubleClick={activateMode} >{title}</span>
    }