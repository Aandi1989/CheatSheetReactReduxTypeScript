import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
    const { page, error, limit, loading, todos } = useTypedSelector(state => state.todo)

    if (loading) {
        return <h1>Идёт загрузка....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.name}</div>
            )}
        </div>
    );
};

export default TodoList