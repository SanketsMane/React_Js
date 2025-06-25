import React from "react";
import { useState } from "react";
import { useTodo } from "../Component/Todocontext";


function TodoForm() {

    const [todos, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todos) return
        addTodo({ todos, completed: false})

        setTodo("");
    }
    

    return (
        <form onSubmit={add}  className="flex">
            <input
                value={todos}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

// This component is used to create a form for adding new todos