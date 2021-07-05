import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography,Button } from '@material-ui/core';
import useStyles from './styles.js';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Project(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}
        title={props.title}
        subheader={props.projectDate}
      />
      <CardMedia className={classes.media} image={props.imageUrl} />
      <CardContent>
        <p fontFamily="cursive" >
          {props.shortDesc}
        </p>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.visitButton} variant="outlined" style={{fontFamily:'Akaya Kanadaka'}}>
          <a href={props.websiteUrl} target="_blank" style={{textDecoration:'none',color:'black'}} >{props.action}</a>
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{color:'black'}} >
          <h4>Languages Used:</h4>
             {props.languages.map((lang)=>(
                  <ul>
                    <li>{lang}</li>
                  </ul>
             ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Project;