
import React from 'react';
import Header from './Components/Header';
import AvailableMovies from './Components/Movies/AvailableMovies';
import PictureOfTheDay from './Components/PictureOfTheDay';

const App = () => {

    return (
        <div> 
            < Header />
            < PictureOfTheDay /> //Nasa Picture of the day
            < AvailableMovies />
       </div>
    );
};

export default App;