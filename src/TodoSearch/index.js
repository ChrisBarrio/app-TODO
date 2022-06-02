import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) =>{ // escucho lo que se busca
        console.log(event.target.value);
        setSearchValue(event.target.value); // llamo a la funcion setSearchValue para que modifique searchValue al cambiar el estado (al ingresar dato)
    };

    return (
        <div className='ContainerTodoSearch'>
            <input 
            className='TodoSearch' 
            placeholder="...Buscar TODO...🤔"
            value={searchValue} // tomo el valor de input y lo envio a <p>
            onChange={onSearchValueChange}/>
            
            <p>{searchValue}</p>
        </div>
        
    );
}

export { TodoSearch }; 