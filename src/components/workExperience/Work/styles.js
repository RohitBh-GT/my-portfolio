import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    paper:{
        fontFamily:'Akaya Kanadaka',
        backgroundColor:'yellow',
        margin:'1rem',
        display:'flex',
        backgroundColor: '#f5dc44',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-felt.png")',
        color:'black',
        flexDirection:'column',
        padding:'0.5rem',
        boxShadow:'5px 5px 8px 3px #f1b00a',
        '&:hover':{
            transform:'scaleY(1.1)'
        }
    }
}));

export default useStyles;