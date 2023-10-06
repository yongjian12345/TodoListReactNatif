import { useState, useContext } from 'react';
import todoService from '../services/todo';
import { TodoContext } from '../contexts/TodoContext';
import { v4 as uuidv4 } from 'uuid';
export default function useTodoInput() {
    const [isInvalid, setIsInvalid] = useState(false);
    const [todo, setTodo] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const {loadTodoList} = useContext(TodoContext);
    const handleChange = ({value}) => {
        setTodo(value);
    };
    const handleSubmit = (event) => {
        
        if (todo.trim().length === 0) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
            setIsSaving(true);
            todoService.insertTodo({id: uuidv4(), todo: todo}).then(
                () => loadTodoList(),
            ).then(() => setIsSaving(false));
        }        
    };
    return {
        todo,
        isInvalid,
        handleChange,
        handleSubmit,
        isSaving,
    };
}