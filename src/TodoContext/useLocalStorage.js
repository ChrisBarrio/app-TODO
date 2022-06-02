import React from "react";


// reacthook (todo esto se guarda en localstorage)
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(()=> {
    setTimeout(()=>{
        try{
        const localStorageItem = localStorage.getItem('itemName');
        let parsedItem;
        
          //si existo lo parseo, sino creo un array vacio
        if (!localStorageItem) {
            localStorage.setItem('itemName', JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        } catch(error){
        setError(error)
        }
    },1000);
    })


    
    const saveItem = (newItem) => {
    try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem('itemName',stringifiedItem);
        setItem(newItem);
    }catch(error){
        setError(error);
    }
    };

    return {
    item,
    saveItem,
    loading,
    error,
    };

}

export {useLocalStorage};