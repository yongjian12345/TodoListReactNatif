import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import todoService from '../services/todo';
export const TodoContext = createContext();
const TodoContextProvider = (props) => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadTodoList();
    }, []);
    const loadTodoList = useCallback(() => {
        setIsLoading(true);
        todoService.getAllTodos().then(
            (data) => setTodoList(data)
        )
        .then(() => setIsLoading(false));
    }, []);
    const contextValue = useMemo(() => ({
        todoList,
        loadTodoList,
        isLoading,
    }), [todoList, loadTodoList, isLoading]);
    return (
        <TodoContext.Provider value={contextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};
export default TodoContextProvider;