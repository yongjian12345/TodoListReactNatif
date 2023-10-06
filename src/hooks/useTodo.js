import { useEffect, useState } from "react";
import todoService from "../services/todo";
export default function useTodo(id) {
    const [todo, setTodo] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        todoService.getTodo(id).then((data) => setTodo(data)).then(() => setIsLoading(false));
    }, []);
    return { todo , isLoading};
}