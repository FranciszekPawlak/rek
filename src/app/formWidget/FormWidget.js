import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import img from '../../assets/Logotyp-Punkta.png'
import Form from './components/Form'

const useStyles = makeStyles(theme => ({
    container:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '250px',
      margin: '0 auto',
    },
      header:{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '250px',
        '&:after': {
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          top: '-162px',
          width: '372px',
          height: '372px',
          backgroundColor: '#F5F5F5',
          borderRadius: '50% 50%',
        }
      },
      logo: {
        width: '131px',
        height: '59px',
        marginTop: '12px'
      },
      headline: {
        color: '#0A2C48',
        fontFamily: 'Red Hat Display, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '21px',
        marginTop: '29.5px',
        marginBottom: '90px',
        textTransform: 'uppercase',
        textAlign: 'center',
      },
      form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '164px'
      },
    }));

const FormWidget = () => {
    const classes = useStyles();
    return ( <div className={classes.container}>
        <header className={classes.header}>
        <img src={img} alt="Logotyp-Punkta" className={classes.logo}/>
        <Typography className={classes.headline}>oszczędź nawet 580 złotych na oc</Typography>
        </header>
        <form className={classes.form}>
        <Form></Form>
        </form>      
      </div> );
}
 
export default FormWidget;