import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    const dateToday = new Date().toLocaleString("en-US", {
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
    console.log(dateToday);

    return <h1 className={classes.header}>
            <span className={classes.span}>NASA:</span> Picture of the Day
            <div> {dateToday} </div>
        </h1>
}; 

export default Header;