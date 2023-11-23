import { useState } from 'react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }
    const onSubmit = (event) => {
        //console.log( event.target.value );
        event.preventDefault(); // Prevent refresh when you press enter in the input
        if( inputValue.trim().length <= 1) return;
        //console.log( inputValue );
        setCategories( categories => [ inputValue, ...categories])
        setInputValue('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="What are you looking?"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}