import { useState } from 'react';
import { PropTypes } from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }
    const onSubmit = (event) => {
        //console.log( event.target.value );
        event.preventDefault(); // Prevent refresh when you press enter in the input
        if( inputValue.trim().length <= 1) return;
        //console.log( inputValue );
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)} aria-label='form'>
            <input 
                type="text"
                placeholder="What are you looking?"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}