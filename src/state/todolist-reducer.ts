import {FilterValueType, todolistPropsType} from "../App";
import {randomUUID} from "crypto";
import {type} from "os";


export const todolistsReducer = (state: todolistPropsType[], action: TodoListReducerType): todolistPropsType[] =>{
    switch (action.type) {
        case 'REMOVE-TODOLIST':{
            return state.filter(tl => tl.id !== action.payload.id)
        }
        case "ADD-TODOLIST":{
                let newTodoList: todolistPropsType = {id: randomUUID(), title: action.payload.title, filter: "all"}
               /* setTasksObj({...tasksObj, [newTodoList.id]: []})*/
            return [newTodoList, ...state]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(tl => tl.id === action.payload.id? {...tl, title: action.payload.title} : tl)
        }
        case "CHANGE-TODOLIST-FILTER":{
            return state.map(tl => tl.id === action.payload.id? {...tl, filter: action.payload.filter} : tl)
        }
        default:
            return state
    }

}

type TodoListReducerType =  RemoveTodolistACType |
    AddTodolistACType |
    ChangeTodolistACType |
    ChangeTodolistFilter;
type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>;
type AddTodolistACType = ReturnType<typeof addTodolistAC>;
type ChangeTodolistACType = ReturnType<typeof changeTodolistAC>;
type ChangeTodolistFilter = ReturnType<typeof changeFilterTodolistAC>;
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title}
    } as const
}

export const changeTodolistAC = (id: string, title: string) =>{
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {id, title}
    } as const
}
export const changeFilterTodolistAC = (id: string, filter: FilterValueType) =>{
    return{
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {id, filter}
    } as const
}