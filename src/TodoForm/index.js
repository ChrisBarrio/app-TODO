import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    

    return (
        <form className="form_modal">
            <label
                className="label"
            >Escriba tu nuevo TODO</label>
            <textarea
            className="text_area"
                value={newTodoValue}
                onChange={onChange}
                placeholder="..."
            />
            <div className="container_buttons">
                <button
                    className="btn_onCancel"
                    type="button"
                    onClick={onCancel}
                >
                Cancelar</button>

                <button
                    className="btn_onSubmit"
                    type="submit"
                    onClick={onSubmit}
                >
                Agregar</button>
            </div>
        </form>
    );
}

export {TodoForm}
