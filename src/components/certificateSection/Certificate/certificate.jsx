import React from 'react';
import { Card, CardMedia, CardActionArea, CardContent, CardActions,Button } from '@material-ui/core';
import useStyles from './styles.js';

function Certificate(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.certificatePhoto}
                    title={props.certificateTitle}
                />
                <CardContent>
                    <h2 style={{fontFamily:'Akaya Kanadaka'}} >{props.certificateTitle}</h2>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" className={classes.Button} style={{fontFamily:'Akaya Kanadaka'}} >
                    <a className={classes.a} target="_blank" href={props.url}>View Certificate</a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default Certificate;