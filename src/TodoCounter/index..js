import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

let date = new Date().toLocaleDateString();

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <header className="TodoCounter">
            <h2>Has completado {completedTodos} de {totalTodos}</h2>
            <p className="fecha">{date}</p>
        </header>
    );
    
}

export { TodoCounter }; 

