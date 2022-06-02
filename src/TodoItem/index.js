import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    
    return (
        
        <li className="TodoItem">
            <span 
            className={`checkbox ${props.completed && 'active'}`}
            onClick={props.onComplete}
            > √ </span>
            
            <p 
            className={`toDo ${props.completed && 'active'}`}
            > {props.text} </p>
            
            <span 
            className="remove"
            onClick={props.onDelete}
            > 🗑️ </span>
        </li>
    );
}

export { TodoItem}; 