import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    About:{
        margin:'2rem',
        fontFamily:'Akaya Kanadaka'
    },
    leftAbout:{
        textAlign:'center',
        padding:'12px',
        color:'white'
    },
    image:{
        borderRadius:'100px',
        width:"200px", 
        height:"200px" ,
        [theme.breakpoints.down('sm')]:{
            width:'180px',
            height:'180px'
        }
    },
    rightAbout:{
        padding:'12px',
        color:'white',
        textAlign:'center'
    },
    rightHeading:{
       fontFamily:'Encode Sans SC',
       color:'#FFAC41', 
       textAlign:'center',
       fontSize:'2.5rem'
    },
    list:{
        padding:'2rem',
        textAlign:'left',
        fontSize:'2rem',
        [theme.breakpoints.down('sm')]:{
            fontSize:'1.6rem'
        }
    }
}));

export default useStyles;