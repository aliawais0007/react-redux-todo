import React, { useState } from 'react'
import "./Input.css"
import { useDispatch } from "react-redux"
import { saveTodo } from "../features/todoSlice";

export const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo = () => {
        input.replaceAll(" ", "").length > 0 ? dispatch(saveTodo(
            {
                id: Date.now(),
                item: input,
                done: false
            }))
            :
            alert("Empty Todo Item")
    }
    return (
        <div className="input">
            <input type="text" placeholder="Enter new item in todo list..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>
                Add
            </button>
        </div>
    )
}