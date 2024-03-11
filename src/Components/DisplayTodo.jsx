import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Application-01/TodoSlice';

function DisplayTodo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const filteredTodos = todos.filter(todo => todo.text.trim() !== '');

    return (
        <div className='container'>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <div className='items'>
                            <span className='text'>
                                {todo.text}
                            </span>
                            <svg className="delete-icon" viewBox="0 0 24 24" onClick={() => handleRemoveTodo(todo.id)}>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayTodo;
