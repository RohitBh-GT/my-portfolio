import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Project from './singleProject/Project.jsx';
import useStyles from './styles.js';
import './styles.css';
import myProjects from './myProjects.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Projects() {
    const classes = useStyles();
    useEffect(()=>{
       Aos.init({duration:2000});
    },[]);
    return (
        <div id="projects" className={classes.projectsContainer} >
            <h1 className="headingProject">Projects</h1>
            <Grid className={classes.mainGrid} container spacing={7}>
               {myProjects.map((myProject)=>(
                <Grid data-aos="fade-left" item xs={12} sm={6} md={3} lg={3.5}>
                    <Project key={myProject.title} title={myProject.title} projectDate={myProject.date} imageUrl={myProject.imageUrl}
                      action={myProject.action}  websiteUrl={myProject.websiteLink} languages={myProject.languages} shortDesc={myProject.shortDesc} />
                </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Projects;