import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    card: {
        maxWidth: '345',
        color:'white',
        backgroundImage:'linear-gradient(1deg,#FFAC41,#FF1E56)',
        '&:hover':{
          backgroundImage:'linear-gradient(13deg,#FFAC41,#FF1E56)'
        } 
      },
      visitButton:{
        textDecoration:'none',
        color:'black',
        '&:hover':{
          backgroundImage:'linear-gradient(50deg,#01579b,#00e5ff)',
          color:'yellow'
        } 
      },
      header:{
          color:'white',
          fontWeight:'900'
      },
      media: {
        height: '0',
        paddingTop: '56.25%',
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      }
}));

export default useStyles;