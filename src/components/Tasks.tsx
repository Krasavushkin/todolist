import React from 'react';
import {type} from "os";

type TasksArr = {
    taskId: number;
    title: string;
    isDone: boolean
}




type TasksType = {
    title: string;
    tasks: TasksArr[];
    students: string[]
}

export const Tasks = (props: TasksType) => {
    return (
        <ul>
            <h1> {props.title}</h1>
            {props.tasks.map((task) => {
                return(
                <li key={task.taskId}><input type={"checkbox"} checked={task.isDone}/>
            <span> {task.title}</span></li>
                )})
            };
            <ul>
                {props.students.map((student) => {
                    return (
                        <li key={student}> {student} </li>
                    )})
                }
            </ul>

        </ul>
    )
};

