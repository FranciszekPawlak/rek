import React, {useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography,MenuItem, Box, FormControl, InputLabel, Select} from '@material-ui/core';
import img from './assets/Logotyp-Punkta.png'
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function App() {

  const classes = useStyles();
  const [brand, setBrand] = React.useState('');
  const [model, setModel] = React.useState('');
  const [fuel, setFuel] = React.useState('');
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
    <div>

      <form>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="brand">Marka</InputLabel>
        <Select
          value={brand}
          onChange={handleChangeBrand}
          variant='filled'
          inputProps={{
            name: 'marka',
            id: 'brand',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="model">Model</InputLabel>
        <Select
         disabled={brand ? false : true}
          value={model}
          onChange={handleChangeModel}
          variant='filled'
          inputProps={{
            name: 'model',
            id: 'model',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="fuel-type">Typ paliwa</InputLabel>
        <Select
          disabled={model ? false : true}
          value={fuel}
          onChange={handleChangeFuel}
          variant='filled'
          inputProps={{
            name: 'paliwo',
            id: 'fuel-type',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </form>
    </div>

  );
}

export default App;
