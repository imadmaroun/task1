import React, { useState, useEffect, useRef, useContext } from 'react';
import { TodoContext } from '../Hooks/useContext/TodoContext';

function AddTodo() {
    const inputRef = useRef();
    const { addTodo } = useContext(TodoContext);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = inputRef.current.value;
        if (newTodo.trim()) {
            addTodo(newTodo);
            inputRef.current.value = '';
        }
    };

    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
