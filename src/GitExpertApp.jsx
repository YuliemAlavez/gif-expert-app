import { useState } from 'react';

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['One punch']);

    console.log(categories);

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            {/* List Gifs */}
            <ol>
                {/* Gif Items */}
                { categories.map( category =>{
                    return <li key={category}>{category}</li>
                })}
            </ol>
                

        </>
    )
}