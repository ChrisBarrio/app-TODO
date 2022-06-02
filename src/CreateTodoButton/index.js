import React from "react";
// import { TodoContext } from "../TodoContext";
import './CreateButton.css'

function CreateTodoButton(props) {
    const onClickButton = () =>{
        props.setOpenModal(prevState => !prevState);
    };

    return (
            <button 
            className="button_add"
            onClick={onClickButton}
            >
                +
            </button>
    );
}

export { CreateTodoButton }; 