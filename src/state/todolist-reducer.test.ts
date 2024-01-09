import {FilterValueType, todolistPropsType} from "../App";
import {
    addTodolistAC,
    changeFilterTodolistAC,
    changeTodolistAC,
    removeTodolistAC,
    todolistsReducer
} from "./todolist-reducer";
import {randomUUID} from "crypto";


test('correct todolist should be removed', () => {
    const todolistID1 = randomUUID();
    const todolistID2 = randomUUID();

    const startState:todolistPropsType[] = [
        {id: todolistID1, title: "what to do", filter: "all"},
        {id: todolistID2, title: "what i do", filter: "all"}
    ]

    const endState = todolistsReducer(startState, removeTodolistAC(todolistID1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistID2)
});
test('correct todolist should be added', () => {
    const todolistID1 = randomUUID();
    const todolistID2 = randomUUID();
    let newTodolistTitle = 'New Todolist';

    const startState:todolistPropsType[] = [
        {id: todolistID1, title: "what to do", filter: "all"},
        {id: todolistID2, title: "what i do", filter: "all"}
    ]

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(newTodolistTitle)
})
test('todolist should be changed', () => {
    const todolistID1 = randomUUID();
    const todolistID2 = randomUUID();
    let newTodolistTitle = 'Todolist';

    const startState:todolistPropsType[] = [
        {id: todolistID1, title: "what to do", filter: "all"},
        {id: todolistID2, title: "what i do", filter: "all"}
    ]

        const endState = todolistsReducer(startState, changeTodolistAC(todolistID1,newTodolistTitle))

    expect(endState.length).toBe(2)
    expect(endState[0].title).toBe(newTodolistTitle)
})
test('correct filter of todolist should be changed', () => {
    const todolistID1 = randomUUID();
    const todolistID2 = randomUUID();
    let newFilter: FilterValueType = 'completed';

    const startState:todolistPropsType[] = [
        {id: todolistID1, title: "what to do", filter: "all"},
        {id: todolistID2, title: "what i do", filter: "all"}
    ]

        const endState = todolistsReducer(startState, changeFilterTodolistAC(todolistID2,newFilter))

    expect(endState[0].filter).toBe("all")
    expect(endState[1].filter).toBe(newFilter)
})