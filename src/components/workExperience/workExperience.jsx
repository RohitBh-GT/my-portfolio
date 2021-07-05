import React from 'react';
import useStyles from './styles.js';
import { Grid } from '@material-ui/core';
import './styles.css';
import Work from './Work/work.jsx';
import MyExperience from './myExperience.js';

function WorkExperience(){
    const classes = useStyles();
    return (
        <div id="workExperience">
            <h2 className="workHeading">Work Experiences</h2>
            <Grid container className={classes.workGrid}>
                {MyExperience.map((exp)=>(
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Work key={exp.company} job={exp.job} company={exp.company} city={exp.city}
                            role={exp.role} time={exp.time} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default WorkExperience;