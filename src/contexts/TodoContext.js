import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import todoService from '../services/todo';
export const TodoContext = createContext();
const TodoContextProvider = (props) => {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        loadTodoList();
    }, []);
    const loadTodoList = useCallback(() => {
        todoService.getAllTodos().then(
            (data) => setTodoList(data)
        );
    }, []);
    const contextValue = useMemo(() => ({
        todoList,
        loadTodoList
    }), [todoList, loadTodoList]);
    return (
        <TodoContext.Provider value={contextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};
export default TodoContextProvider;