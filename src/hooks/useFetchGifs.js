import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const isLoading = true;
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        isLoading = false;
    }
    useEffect(()=>{
        getImages();
    },[]);

    return {
        images: images,
        isLoading: isLoading
    }
}