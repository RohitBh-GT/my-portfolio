import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    paper:{
        fontFamily:'Akaya Kanadaka',
        backgroundColor:'yellow',
        margin:'1rem',
        display:'flex',
        backgroundColor: '#FFAC41',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-felt.png")',
        color:'black',
        flexDirection:'column',
        padding:'0.5rem',
        boxShadow:'5px 5px 8px 3px #fab052',
        '&:hover':{
            transform:'scale(1.1)',
        }
    }
}));

export default useStyles;