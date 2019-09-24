import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container,Button,Icon, Typography,MenuItem, Box, FormControl, InputLabel, Select} from '@material-ui/core';
import {ArrowForward, ArrowDropDown, CheckCircle} from '@material-ui/icons'
import img from './assets/Logotyp-Punkta.png'
import axios from 'axios';
import FormInput from './components/FomInput'
import FormButton from './components/FormButton'
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
  button: {
    marginTop: '40px',
  },
  x:{
    marginTop: '50px'
  }
}));

const styles = theme => ({
   mainColor:{
    color: 'red'
  }
})
function App() {
  const classes = useStyles();
  const [brand, setBrand] = React.useState(false);
  const [model, setModel] = React.useState(false);
  const [fuel, setFuel] = React.useState(false);
  const handleChangeBrand = event => {
    setBrand(event.target.value);
  };
  const handleChangeFuel = event => {
    setFuel(event.target.value);
  };
  const handleChangeModel = event => {
    setModel(event.target.value);
  };

useEffect(()=>{
  axios.defaults.headers.common['Authorization'] = 'Basic YXV0a2FfYXBpOmF1dGthX2FwaV8yMDE5';
  axios({
    method: 'GET',
    url: 'https://api-dev.mfind.pl/cars'
  })
  .then(res => console.log(res))
})
  return (
    <div className={classes.container}>
      <header className={classes.header}>
      <img src={img} alt="Logotyp-Punkta" className={classes.logo}/>
      <Typography className={classes.headline}>oszczędź nawet 580 złotych na oc</Typography>
      </header>
      
      <form className={classes.form}>
      <FormInput name="Marka"></FormInput>
      <FormInput name="Model"></FormInput>
      <FormInput name="Typ paliwa"></FormInput>

      </form>
      <FormButton></FormButton>
      
    </div>

  );
}

export default App;
