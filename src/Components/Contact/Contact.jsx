import React, {useState} from 'react'
import {useDispatch} from "react-redux"

import { addTodo, removeAllCheck } from '../../redux/Todo/todoSlice'
import ItemTodo from './ItemTodo'
import "./Contact.css"

function Contact() {
    const [title, setTitle] = useState("")

    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(addTodo(title))
        setTitle("")
    }

    const handleRemoveAllcheck = () => {
      dispatch(removeAllCheck())
    }

  return (
    <div className='Contact'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Entet Text' />

        <button disabled={!title.trim()} onClick={handleAddTodo} className='addBtn'>Add</button>
        <button onClick={handleRemoveAllcheck} className='addBtn'>Remove All Check</button>
        <ItemTodo />
    </div>
  )
}

export default Contact