import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 300,
      padding:'0.2rem',
      fontFamily:'Akaya Kanadaka',
      backgroundColor: '#ffa726',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/back-pattern.png")'
    },
    media: {
      height: 200,
    },
    Button:{
        backgroundColor:'#c6ff00',
        margin:'auto',
        '&:hover':{
          backgroundImage:'linear-gradient(45deg,#ff80ab,#00e5ff)'
        } 
    },
    a:{
        textDecoration:'none',
        color:'black',
        fontWeight:'750'
    }
}));

export default useStyles;