import classes from './PictureOfTheDay.module.css';
import { useEffect, useState } from 'react';


const PictureOfTheDay = () => {
    const [image, setImage] = useState();
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR");
            

            //Check if the fetch request was successful or not 
            if(!response.ok){
                throw new Error('Something went wrong.'); 
            }
            const responseData = await response.json();
            const imageURL = responseData.url;
            setImage(imageURL); //update the state
                };

        fetchData().catch( error => {
            setHttpError(error.message);
        });
    
    }, []);

    //Check if there is http error
    if(httpError){
        return(
            <section className={classes.ImageError}>
                <p>{httpError}</p>
            </section>
        )
    }

    return(
        <div className={classes.potd}>
            <img src={image} />
        </div>
    )
};

export default PictureOfTheDay;