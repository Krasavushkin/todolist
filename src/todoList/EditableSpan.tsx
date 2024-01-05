    import React, {ChangeEvent, useState} from "react";

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
            <input autoFocus value={editableSpanTitle} onChange={onChangeSpanHandler} onBlur={deActivateMode} /> :
            <span onDoubleClick={activateMode} >{title}</span>
    }