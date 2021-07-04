import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
     programmingLang:{
         border:'2px solid white',
         borderRadius:'10px',
         margin:'0.5rem',
         display:'flex',
         justifyContent:'space-between',
         alignItems:'center',
         backgroundColor:'#e65100',
         fontSize:'1.4rem',
         padding:'0.5rem',
         [theme.breakpoints.down('sm')]:{
            fontSize:'1.1rem'
        }
     }
}));

export default useStyles;