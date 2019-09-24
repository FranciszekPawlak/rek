import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem,  FormControl,  Select} from '@material-ui/core';
import {ArrowDropDown, CheckCircle} from '@material-ui/icons'

  const useStyles = makeStyles({
    select:{
      color: '#000',
      opacity: '0.6',
      backgroundColor:' white',
      fontFamily: 'Roboto',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.11px',
      height: '42px',
      boxSizing: 'border-box',
      padding: '12px 0 14px 13px',
    },
    icon:{
    color: props => props.color
    },
    container:{
      marginBottom: '20px'
    }
  });

const FormInput = (props) => {
    const [brand, setBrand] = React.useState(false);
    const handleChange = event => {
      setBrand(event.target.value);
    };
    const styleProps = {color: brand ? '#67AB1C' : '#000'}
    const classes = useStyles(styleProps);
    return (
    <FormControl classes={{
      root: classes.container,
    }}>
      <Select
        renderValue={value=> value ? value : props.name }
        classes={{
          root: classes.select,
          icon: classes.icon,
        }}
        variant='filled'
        value={brand}
        onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'age-simple'
        }}
        IconComponent={brand ?  CheckCircle : ArrowDropDown}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>);
}
 
export default FormInput;