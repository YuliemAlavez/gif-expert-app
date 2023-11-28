import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    //Create a error because useEffect don't allow Promise
    /*
    useEffect( async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
    },[]);
    */

    //Solution 1
    /*
    useEffect(()=>{
        getGifs(category)
            .then( newImages => setImages(newImages));
    },[]);
    */

    //Solution 2
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }
    useEffect(()=>{
        getImages();
    },[]);

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {   images.map( img => {
                        return <img src={img.url} alt={img.title} width="150" height="180"/>
                    })
                }
            </ol>
        </>
    )
}