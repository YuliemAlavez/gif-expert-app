import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }
    const onSubmit = (event) => {
        //console.log( event.target.value );
        event.preventDefault();
        console.log( inputValue );
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