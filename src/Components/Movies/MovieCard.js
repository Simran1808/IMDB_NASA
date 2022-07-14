//Structure of each movie card

import classes from './MovieCard.module.css';

function MovieCard(props){

    
    return <div className={classes.movie} onClick={props.onOpenModal}>
        <div>
            <img src={props.movieImageURL}/>
            <h1>{props.title}</h1>
            <div> 
                <h4> Description: </h4>
                <p className={classes.descriptionText}>{props.description}</p>
            </div>
            <p> Popularity: 
                 <em> {props.popularity}</em> 
            </p>
            <p> Release Date: 
                <em> {props.releaseDate} </em>
            </p>
        </div>
    </div>
};

export default MovieCard;