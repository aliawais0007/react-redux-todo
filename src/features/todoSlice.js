import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        updateToDo: (state, action) => {
            state.todoList.map(item => {
                console.log(action.type)
                if (item.id === action.payload) {
                    if (item.done) {
                        item.done = false
                    }
                    else item.done = true
                }
            })
        },
        removeToDo: (state, action) => {
            state.todoList = state.todoList.filter(item => {
                console.log(action.type)
                return item.id !== action.payload
            })
        }
    }
});

export const { saveTodo, updateToDo, removeToDo } = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer