import React from 'react';

function TodoItems({ todos }) {
    return (
        <div>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoItems;
