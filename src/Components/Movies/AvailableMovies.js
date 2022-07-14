import React, { useEffect, useState } from 'react';
import classes from './AvailableMovies.module.css';
import MovieCard from './MovieCard';
import NoImage from '../../assets/gallery.png';
import MovieModal from '../UI/MovieModal';

function AvailableMovies(){
const [movies, setMovies] = useState([]);
const [httpError, setHttpError] = useState();
const [openModal, setOpenModal] = useState(false);
const [movieIndex, setMovieIndex] = useState('');

useEffect(() => {
    // console.log(movies);
    const fetchData = async () => {
        const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=48b43c71c226d58239efb833d05ab17c&language=en-US&query=NASA&include_adult=false&1");

        //Check if the fetch request was successful or not 
        if(!response.ok){
            throw new Error('Something went wrong.'); 
        }
        const responseData = await response.json();

        const moviesData = responseData.results;
        const loadedMovies = [];
        console.log(moviesData);

      for(const key in moviesData){ //Adding the fetched data to the loadedMovies Array
        const movieImage = moviesData[key].poster_path;
        
        const fetchedMovieURL = (movieImage != null) ? `https://image.tmdb.org/t/p/original//${movieImage}` : NoImage;   
        loadedMovies.push({
          key: key,
          id: moviesData[key].id,
          movieImageURL: fetchedMovieURL,
          title: moviesData[key].original_title,
          description: moviesData[key].overview,
          popularity: moviesData[key].popularity,
          releaseDate: moviesData[key].release_date,
          voteAverage: moviesData[key].vote_average,
          voteCount: moviesData[key].vote_count,
        });
      }
    //   console.log(loadedMovies);
      setMovies(loadedMovies); 
      
            };

    fetchData().catch( error => {
        setHttpError(error.message);
    });

}, []);

console.log(movies);

//Check if there is an http error
if(httpError){
    return(
      <section className={classes.ErrorMessage}>
        <p>{httpError}</p>
      </section>
    )
  }

  
const moviesList= movies.map(movie =>  //Map each movie object to a JSX element
<MovieCard onOpenModal={ () => openModalHandler(movie)}
key= {movie.key}
id = {movie.id}
title = {movie.title}
description = {movie.description}
movieImageURL = {movie.movieImageURL}
popularity = {movie.popularity}
releaseDate = {movie.releaseDate}
/>);

console.log(moviesList);

function openModalHandler(movie){ 
    setOpenModal(true);
    setMovieIndex(movie.key);
    console.log(movieIndex);
    document.body.style.overflow = 'hidden';
  };

  function closeModalHandler(){
      setOpenModal(false);
      document.body.style.overflow = 'unset';

  };



const movieDetails= movies.map(movie =>  //Movie details to be displayed in the modal
    <MovieModal onClose={closeModalHandler}
    key= {movie.key}
    id = {movie.id}
    title = {movie.title}
    description = {movie.description}
    movieImageURL = {movie.movieImageURL}
    popularity = {movie.popularity}
    releaseDate = {movie.releaseDate}
    voteAverage = {movie.voteAverage}
    voteCount = {movie.voteCount}
    />);


console.log(movieDetails);





return <section className={classes.movies}>
    
    {/* <div className={classes.list}> */}
    {moviesList}
    {openModal && movieDetails[movieIndex]}
    {/* </div> */}
    
</section>
};
 

export default AvailableMovies;
