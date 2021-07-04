import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles.js';

function Work(props) {
  const classes = useStyles();
  return (
    <div className={classes.paper} variant="outlined" >
      <div style={{textAlign:'center'}} >
      <h2>{props.job}</h2>
        AT
      <h3>{props.company} <h4>{props.city}</h4></h3>
      </div>
      <Typography variant="h6" component="span" style={{ fontWeight: '600', fontFamily: 'Akaya Kanadaka' }} >Internship Period:&nbsp;&nbsp; {props.time} </Typography>
      <Typography style={{ fontWeight: 'bold', fontFamily: 'Akaya Kanadaka' }} variant="h6">My Role:</Typography>
      <ul>
        {props.role.map((r)=>(
          <li>{r}</li>
        ))}
      </ul>  
    </div>
  );
}

export default Work;