import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { selectTodoList, updateToDo, removeToDo } from "../features/todoSlice";
import { useSelector, useDispatch } from "react-redux";


export const TodoList = props => {
    const todoList = useSelector(selectTodoList)
    const dispatch = useDispatch()

    const handleCheck = (id) => {
        dispatch(updateToDo(id))
    }
    const handleRemove = (id) => {
        dispatch(removeToDo(id))
    }
    return (
        <div className="list__wrapper">
            {
                todoList.length ? todoList.map((item, index) => {
                    return (
                        <div className="todo" key={index}>
                            <input type="checkbox" checked={item.done} onChange={() => handleCheck(item.id)} />
                            <p className={item.done ? "task__completed" : ""}>{item.item}</p>
                            <span className="remove__icon" onClick={() => handleRemove(item.id)}>x</span>
                        </div>
                    )
                })
                    :
                    <p>No Item in Todo List, Add more from input</p>
            }
        </div>
    );
};

TodoList.propTypes = {
    props: PropTypes.object
};

export default TodoList;