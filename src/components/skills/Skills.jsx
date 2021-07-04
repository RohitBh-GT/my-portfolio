import React from 'react';
import { Grid } from '@material-ui/core';
import Programming from './Skillset/Programming.jsx';
import './styles.css';
import useStyles from './styles.js';
import { SiC,SiCplusplus,SiJava,SiHtml5,SiCss3,SiJavascript,SiReact,SiNodeDotJs,SiRedux,SiMysql,SiMongodb,SiFirebase,
SiAndroidstudio,SiVisualstudiocode,SiEclipseide} from 'react-icons/si'

function Skills(){
    const classes = useStyles();
    return (
        <div className={classes.skillsContainer}> 
            <h2 className="skillsHeading">Skills</h2>
            <Grid container>

                <Grid item xs={12} sm={3} md={3} lg={4}>
                    <h3 className={classes.langHeading} >Programming Languages</h3>
                </Grid>
                <Grid container xs={12} sm={9} md={9} lg={8}>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiC className={classes.iconStyle} fontSize="2rem" color="#0277bd"/>} PLang="C Lang" maxScore="60" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiCplusplus className={classes.iconStyle} fontSize="2rem" color="#3f51b5"/>} PLang="C++" maxScore="80" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiJava className={classes.iconStyle} fontSize="2rem" color="#ffeb3b" />} PLang="Java" maxScore="80" /></Grid>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={4}>
                    <h3 className={classes.langHeading} >Web Technologies</h3>
                </Grid>
                <Grid container xs={12} sm={9} md={9} lg={8}>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiHtml5 className={classes.iconStyle} fontSize="2rem" color="#ffca28"/>} PLang="HTML 5" maxScore="100" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiCss3 className={classes.iconStyle} fontSize="2rem" color="#3f51b5"/>} PLang="CSS 3" maxScore="100" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiJavascript className={classes.iconStyle} fontSize="2rem" color="#ffeb3b" />} PLang="JavaScript" maxScore="80" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiNodeDotJs className={classes.iconStyle} fontSize="2rem" color="#8bc34a"/>} PLang="Node.Js" maxScore="80" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiReact className={classes.iconStyle} fontSize="2rem" color="#00e5ff"/>} PLang="ReactJS" maxScore="80" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiRedux className={classes.iconStyle} fontSize="2rem" color="#ffeb3b" />} PLang="Redux" maxScore="60" /></Grid>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={4}>
                    <h3 className={classes.langHeading} >Databases</h3>
                </Grid>
                <Grid container xs={12} sm={9} md={9} lg={8}>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiMysql className={classes.iconStyle} fontSize="2rem" color="#00838f"/>} PLang="SQL" maxScore="80" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiMongodb className={classes.iconStyle} fontSize="2rem" color="#4caf50"/>} PLang="Mongo DB" maxScore="80" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiFirebase className={classes.iconStyle} fontSize="2rem" color="#ffeb3b" />} PLang="Firebase" maxScore="60" /></Grid>
                </Grid>

                <Grid item xs={12} sm={3} md={3} lg={4}>
                    <h3 className={classes.langHeading} >Frameworks</h3>
                </Grid>
                <Grid container xs={12} sm={9} md={9} lg={8}>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiAndroidstudio className={classes.iconStyle} fontSize="2rem" color="#4caf50"/>} PLang="Android Studio" maxScore="90" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiVisualstudiocode className={classes.iconStyle} fontSize="2rem" color="#0288d1"/>} PLang="Visual Studio" maxScore="100" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><Programming icon={<SiEclipseide className={classes.iconStyle} fontSize="2rem" color="#283593" />} PLang="Eclipse" maxScore="70" /></Grid>                </Grid>


            </Grid>
        </div>
    );
}

export default Skills;