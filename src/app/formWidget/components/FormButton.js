import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import {ArrowForward} from '@material-ui/icons'

const useStyles = makeStyles({
    button:{
        height: '38.5px',
        marginTop: '33px',
        fontSize: '15px',
        lineHeight: '20px',
        letterSpacing: '1.34px',
        borderRadius: '20px',
    },
    icon:{
        marginLeft: '40px',
    },
    
  });

const FormButton = ({url,disabled}) => {
    const classes = useStyles();

    return (
    <Button href={url} target="_blank" disabled={disabled ? true : false} classes={{root: classes.button,}}  fullWidth color='secondary' variant='contained'>
          oblicz składkę
        <ArrowForward classes={{root: classes.icon, }} />
        </Button>
    );
}
 
export default FormButton;