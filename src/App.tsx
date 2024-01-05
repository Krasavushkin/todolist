import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, TodoList} from "./todoList/TodoList";
import {AddItemForm} from "./todoList/AddItemForm";


export type FilterValueType = 'all' | 'completed' | 'active';
type todolistPropsType = {
    id: string
    title: string
    filter: FilterValueType
}

function App() {
    const todolistID1 = crypto.randomUUID();
    const todolistID2 = crypto.randomUUID();
    let [todolists, setTodolists] = useState<todolistPropsType[]>([
        {id: todolistID1, title: "what to do", filter: "all"},
        {id: todolistID2, title: "what i do", filter: "all"}
    ])
    let [tasksObj, setTasksObj] = useState({
            [todolistID1]: [
                {id: crypto.randomUUID(), title: "Buy a dog", isDone: false},
                {id: crypto.randomUUID(), title: "Live with a cat", isDone: true},
                {id: crypto.randomUUID(), title: "Dont feed a cat", isDone: false},
                {id: crypto.randomUUID(), title: "Leave the cat", isDone: false}
            ],
            [todolistID2]: [
                {id: crypto.randomUUID(), title: "Buy a cat", isDone: false},
                {id: crypto.randomUUID(), title: "Live with a cat", isDone: true},
                {id: crypto.randomUUID(), title: "Dont feed a cat", isDone: false},

            ]
        }
    )
    const removeTask = (todolistId: string, taskId: string) => {
        setTasksObj({...tasksObj, [todolistId]: tasksObj[todolistId].filter(t => t.id !== taskId)})
    }
    const filterTasks = (todolistId: string, value: FilterValueType) => {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: value} : el))
    }
    const changeStatus = (todolistId: string, taskId: string, value: boolean) => {
        setTasksObj({
            ...tasksObj,
            [todolistId]: tasksObj[todolistId].map(el => el.id === taskId ? {...el, isDone: value} : el)
        })
    }
    const changeTaskTitle = (todolistId: string, taskId: string, newTitle: string) => {
        setTasksObj({
            ...tasksObj,
            [todolistId]: tasksObj[todolistId].map(el => el.id === taskId ? {...el, title: newTitle} : el)
        })
    }
    const changeTodolistTitle = (todolistId: string, newTodolistTitle: string) => {
        setTodolists(todolists.map(el => el.id === todolistId? {...el, title: newTodolistTitle} : el)
        )}
    const addTask = (todolistId: string, title: string) => {
        let newTask = {id: crypto.randomUUID(), title: title, isDone: false}
        setTasksObj({...tasksObj, [todolistId]: [newTask, ...tasksObj[todolistId]]})
    }
    const addTodoList = (todolistTitle: string) => {
        let newTodoList: todolistPropsType = {id: crypto.randomUUID(), title: todolistTitle, filter: "all"}
        setTodolists([newTodoList, ...todolists])
        setTasksObj({...tasksObj, [newTodoList.id]: []})
    }
    return (
        <div className="App">
            <AddItemForm addItem={addTodoList}/>
            {todolists.map(tl => {
                let filteredTasksArr = tasksObj[tl.id];
                if (tl.filter === 'active') {
                    filteredTasksArr = tasksObj[tl.id].filter(t => !t.isDone)
                }
                if (tl.filter === 'completed') {
                    filteredTasksArr = tasksObj[tl.id].filter(t => t.isDone)
                }
                return <TodoList
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={filteredTasksArr}
                    filterTasks={filterTasks}
                    removeTask={removeTask}
                    changeStatus={changeStatus}
                    changeTitle={changeTaskTitle}
                    addTask={addTask}
                    filter={tl.filter}
                    changeTodolistTitle={changeTodolistTitle}
                />
            })}

        </div>
    );
}

export default App;
