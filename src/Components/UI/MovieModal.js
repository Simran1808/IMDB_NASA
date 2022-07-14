import React from 'react';
import Modal from './Modal';
import classes from './MovieModal.module.css';

function MovieModal(props){
return <Modal onClose={props.onClose}>
<div className={classes.container}>
    <div>
    <img src={props.movieImageURL}/> 
    </div>

    <div className={classes.movieData}>
    <h2>
        <strong>Title: {props.title}</strong>
    </h2>
    <h2>
        <strong>Overview: {props.description} </strong>
    </h2>
    <h2>
        <strong>Vote Average: {props.voteAverage}</strong>
    </h2>
    <h2>
        <strong>Total Votes: {props.voteCount}</strong>
    </h2>
    </div>
</div>
</Modal>
};

export default MovieModal;