import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
export default function useTodoList() {
    const {todoList, isLoading, loadTodoList} = useContext(TodoContext);
    return {todoList, isLoading, loadTodoList};
}