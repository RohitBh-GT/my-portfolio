import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Photo from '../images/photo.jpeg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoIosCall } from 'react-icons/io';
import Aos from 'aos';
import "aos/dist/aos.css";
import useStyles from './styles.js';
import './styles.css';

function About(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const classes = useStyles();
    return (
        <div id="about" className={classes.About}>
           <Grid container spacing={3}>
               <Grid item xs={12} md={4} className={classes.leftAbout} >
                   <img src={Photo} className={classes.image} />
                   <h1 style={{color:'#ef6c00'}} >Rohit Bhalla</h1>
                   <h3>(2nd Year Student)</h3>
                   <div><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDDGPgcCZmdpbbTWlqHhrQNjNgvHKbwpWBtzZMKkzCDQPMPPgqWhPXZxScVSbSkDVtMMZC"><SiGmail className="social gmail" fontSize="2rem" /></a>&nbsp; &nbsp;
                   <a target="_blank" href="https://www.linkedin.com/in/rohit-bhalla-5ba4451a2/"><FaLinkedin className="social linkedIn" fontSize="2rem" /></a>&nbsp; &nbsp;
                   <a target="_blank" href="https://github.com/RohitBh-GT"><AiFillGithub className="social github" fontSize="2rem" /></a></div>
                   <a className="social call" href="tel:7009304325"><IoIosCall fontSize="1.5rem" /> 7009304325</a>
               </Grid>
               <Grid item xs={12} md={8} className={classes.rightAbout}>
                   <h1 data-aos="fade-up" className={classes.rightHeading}>I am a MERN Stack Developer</h1>
                   <div className={classes.list}>
                   <ul>
                     <li>Age: 20</li>  
                     <li>Doing B.E. CSE from UIET,PU</li>
                     <li>Lives in Mohali</li>
                     <li>Excellent in Problem solving skills</li>
                     <li>Interests: Coding and Cricket</li>
                   </ul> 
                   </div>
               </Grid>          
           </Grid>
        </div>
    );
}

export default About;