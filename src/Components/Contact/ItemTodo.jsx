import React from 'react'

import {useSelector, useDispatch} from "react-redux"

import { removeTodo, toggleTodo } from '../../redux/Todo/todoSlice'

function ItemTodo() {
    const todos = useSelector((state) => state.todo.todos)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo(id))
    }
  return (
    <ul>
        {
            todos.map((item) => (
                <li key={item.id}>
                    <input onChange={() => handleToggle(item.id)} type='checkbox' checked={item.completed} />
                    <p className={item.completed ? "text": ""}>{item.text}</p>
                    <button onClick={() => handleDelete(item.id)} className='addBtn'>Delete</button>
                </li>
            ))
        }
    </ul>
  )
}

export default ItemTodo