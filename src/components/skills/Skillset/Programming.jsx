import React from 'react';
import CircularProgress from './circularProgress.jsx';
import useStyles from './styles.js';

function Programming(props){
    const classes = useStyles();
    return (
         <div className={classes.programmingLang}>
             <span>{props.icon} {props.PLang}</span>
             <CircularProgress maxScore={props.maxScore} />
         </div>
    );
}

export default Programming;