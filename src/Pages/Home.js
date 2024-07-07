import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../Hooks/useContext/TodoContext';
import TodoItems from '../Hooks/useState/TodoItems';

function Home() {
    const { todos } = useContext(TodoContext);

    useEffect(() => {
        console.log('The list of items:', todos);
    }, [todos]);

    return (
        <div>
            <h1>To Do List</h1>
            <TodoItems todos={todos} />
        </div>
    );
}

export default Home;
