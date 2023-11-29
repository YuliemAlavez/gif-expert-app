import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['One punch']);
    const onAddCategory = ( newCategory ) =>{
        //console.log(newCategory)
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //setCategories( cat => [...cat,'Ironman']);//Asssign with callback
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={ value => onAddCategory(value) }
            />
            {/* List Gifs */}
            <button onClick={onAddCategory}>Add</button>
            
            {/* Gif Items */}
            {   categories.map( category => /*{
                        return <GifGrid key={ category } category={ category }/>
                    }*/
                    (<GifGrid key={ category } category={ category }/>)
                )
            }
        </>
    )
}