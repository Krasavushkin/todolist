import React, {ChangeEvent} from 'react';
import c from './Todolist.module.css'
import {FilterValueType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";


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
    changeTitle: (todolistId: string, taskId:string, newTitle: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
    addTask: (todolistId: string, title: string) => void
    filter: FilterValueType
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
                                                      filter
                                                  }) => {

    const addTaskHandler = (title: string) => {
        addTask(id, title)
    };
    const allTasksFilterHandler = () => filterTasks(id, 'all');
    const activeTasksFilterHandler = () => filterTasks(id, 'active');
    const completedTasksFilterHandler = () => filterTasks(id, 'completed');
    const changeTodolistTitleHandler = (newTodolistTitle: string) => changeTodolistTitle (id, newTodolistTitle)
    return (
        <div className={c.style}>
            <h3> <EditableSpan title={title} changeTitle={changeTodolistTitleHandler} /> </h3>
            <AddItemForm addItem={addTaskHandler}/>
            <ul className={c.ul}>
                {tasks.map(t => {
                    const removeTaskHandler = () => removeTask(id, t.id);
                    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => changeStatus(id, t.id, e.currentTarget.checked);
                    const onChangeTitleHandler = (newTitle: string) => changeTitle(id, newTitle, t.id);

                    return <li key={t.id} className={t.isDone ? c.isDone : ""}>
                        <input type="checkbox" checked={t.isDone} onChange={changeStatusHandler}/>
                        <EditableSpan title={t.title} changeTitle={onChangeTitleHandler}/>
                        <button onClick={removeTaskHandler}> X</button>
                    </li>
                })}
            </ul>
            <button className={filter === 'all' ? c.filter : ''} onClick={allTasksFilterHandler}> All tasks</button>
            <button className={filter === 'active' ? c.filter : ''} onClick={activeTasksFilterHandler}> Active</button>
            <button className={filter === 'completed' ? c.filter : ''}
                    onClick={completedTasksFilterHandler}> Completed
            </button>
        </div>
    );
};

