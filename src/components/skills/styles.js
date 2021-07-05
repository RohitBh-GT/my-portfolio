import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
   skillsContainer:{
       fontFamily:'Akaya Kanadaka',
       color:'white',
       margin:'3rem'
   },
   langHeading:{
       fontSize:'1.5rem',
       color:'#FFAC41',
       marginTop:'0.9rem'
   },
   iconStyle:{
    [theme.breakpoints.down('sm')]:{
        fontSize:'1.5rem'
    }
   }
}));

export default useStyles;