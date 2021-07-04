import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
   skillsContainer:{
       fontFamily:'Akaya Kanadaka',
       color:'white',
       margin:'3rem'
   },
   langHeading:{
       fontSize:'1.5rem',
       color:'orange'
   },
   iconStyle:{
    [theme.breakpoints.down('sm')]:{
        fontSize:'1.5rem'
    }
   }
}));

export default useStyles;