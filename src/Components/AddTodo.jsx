import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Application-01/TodoSlice';
import '../App.css'
function AddTodo() {
    const [input,setinput]=useState('');
    const dispatch=useDispatch();
    const eventHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('');
    }
  return (
    <div className='add-todo'>

        <form onSubmit={eventHandler}> 
            <input className='T1' type='text' value={input} placeholder='ENTER TO-DO' onChange={(e)=>setinput(e.target.value)}></input>
            <button>ADD</button>
        </form>
    </div>
  )
}

export default AddTodo