import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
export default function useTodoList() {
    const {todoList} = useContext(TodoContext);
    return {todoList};
}