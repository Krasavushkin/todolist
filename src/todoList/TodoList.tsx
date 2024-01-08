import React, {ChangeEvent} from 'react';
import c from './Todolist.module.css'
import {FilterValueType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";


export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListProps = {
    id: string
    title: string
    tasks: Array<TasksPropsType>
    filterTasks: (todolistId: string, value: FilterValueType) => void
    removeTask: (todolistId: string, taskId: string) => void
    changeStatus: (todolistId: string, taskId: string, value: boolean) => void
    changeTitle: (todolistId: string, taskId: string, newTitle: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
    addTask: (todolistId: string, title: string) => void
    filter: FilterValueType
    removeTodolist: (todoListId: string) => void
}
export const TodoList: React.FC<TodoListProps> = ({
                                                      title,
                                                      id,
                                                      tasks,
                                                      filterTasks,
                                                      removeTask,
                                                      changeStatus,
                                                      changeTitle,
                                                      changeTodolistTitle,
                                                      addTask,
                                                      filter,
                                                      removeTodolist
                                                  }) => {

    const addTaskHandler = (title: string) => {
        addTask(id, title)
    };
    const allTasksFilterHandler = () => filterTasks(id, 'all');
    const activeTasksFilterHandler = () => filterTasks(id, 'active');
    const completedTasksFilterHandler = () => filterTasks(id, 'completed');
    const changeTodolistTitleHandler = (newTodolistTitle: string) => changeTodolistTitle(id, newTodolistTitle)
    const removeTodolistHandler = () => removeTodolist(id)
    return (
        <div className={c.style}>
            <h3>
                <EditableSpan title={title} changeTitle={changeTodolistTitleHandler}/>
                <IconButton onClick={removeTodolistHandler}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTaskHandler}/>
            <div className={c.ul}>
                {tasks.map(t => {
                    const removeTaskHandler = () => removeTask(id, t.id);
                    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => changeStatus(id, t.id, e.currentTarget.checked);
                    const onChangeTitleHandler = (newTitle: string) => changeTitle(id, newTitle, t.id);

                    return <div key={t.id} className={t.isDone ? c.isDone : ""}>
                        <Checkbox color="secondary" checked={t.isDone} onChange={changeStatusHandler}/>
                       {/* <input type="checkbox" checked={t.isDone} onChange={changeStatusHandler}/>*/}
                        <EditableSpan title={t.title} changeTitle={onChangeTitleHandler}/>
                        <IconButton onClick={removeTaskHandler}>
                            <Delete/>
                        </IconButton>
                    </div>
                })}
            </div>
            <Button color='inherit' variant={filter === 'all' ? 'outlined' : 'text'}
                    onClick={allTasksFilterHandler}> All tasks
            </Button>
            <Button variant={filter === 'active' ? 'outlined' : 'text'}
                    onClick={activeTasksFilterHandler}>Active
            </Button>
            <Button color='secondary'
                variant={filter === 'completed' ? 'outlined' : 'text'}
                    onClick={completedTasksFilterHandler}> Completed
            </Button>
        </div>
    );
};

