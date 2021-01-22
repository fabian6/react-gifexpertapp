import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    //state del input
    const [inputValue, setInputValue] = useState('')

    //funcion que captura algun cambio en el input
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    //funcion que se encarga de hacer el submit del form
    const handleSubmit = (e)=>{
        e.preventDefault();

        //condicional para que el valor del input sea mayor a 2 caracteres
        if(inputValue.trim().length > 2){
            
            setCategories(cat=>[inputValue,...cat]);
            //al dar enter se cambia el valor del input a vacio
            setInputValue('');
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            
            <input
                type="text"
                value= {inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}