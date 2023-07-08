import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoList: React.FC = () => {
    const { page, error, limit, loading, todos } = useTypedSelector(state => state.todo)
    const {fetchTodos,setTodoPageAC} =useActions()
    const pages = [1, 2, 3, 4, 5]
    
    useEffect(() => {
        fetchTodos(page, limit)
    },[page])

    if (loading) {
        return <h1>Идёт загрузка....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display:'flex'}}>
            {pages.map(p => 
                 <div onClick={() => setTodoPageAC(p)} style={{border: p === page ? '2px solid black' : '1px solid gray', padding:'10px'}}>
                    {p}
                 </div>   
            )}
            </div>
        </div>
    );
};

export default TodoList