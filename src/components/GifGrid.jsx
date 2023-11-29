import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

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
    /*const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }
    useEffect(()=>{
        getImages();
    },[]);*/
    const { images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* Solution 1 to show Loading message */}
            {/*
                isLoading
                ? (<h2>Loading...</h2>)
                : null
            */}

            {/* Solution 2 to show Loading message */}
            {
                isLoading && (<h2>Loading...</h2>)
            }
            
            <div className="card-grid">
                {   images.map( image => {
                        return <GifItem key={ image.id } {...image}/>
                    })
                }
            </div>
        </>
    )
}