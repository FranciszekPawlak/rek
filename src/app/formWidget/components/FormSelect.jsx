import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem,  FormControl,  Select} from '@material-ui/core';
import {ArrowDropDown, CheckCircle} from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import actions from '../duck/actions'
import types from '../duck/types'
const useStyles = makeStyles({
    select:{
      color: '#000',
      opacity: '0.6',
      fontFamily: 'Roboto',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.11px',
      height: '42px',
      boxSizing: 'border-box',
      padding: '12px 0 14px 13px',
    },
    disabled:{
      backgroundColor: '#F8F8F8',
    },
    iconSelect:{
    color: props => props.colorBrand
    },
    iconModel:{
    color: props => props.colorModel
    },
    iconFuel:{
    color: props => props.colorFuel
    },
    container:{
      marginBottom: '20px'
    }
  });
const FormSelect = ({name, selectList, value, disabled}) => {
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        e.preventDefault()
        const select = e.target.value
        switch(name){
            case 'Marka':
                //clear next steps
                dispatch(actions.clearList(types.CLEAR_MODELS))
                dispatch(actions.clearList(types.CLEAR_FUELS))
                dispatch(actions.setSelect(types.SET_MODEL, false))
                dispatch(actions.setSelect(types.SET_FUEL, false))
                localStorage.removeItem('model')
                localStorage.removeItem('fuel')
                localStorage.removeItem('fuelCode')
                //set values
                dispatch(actions.setSelect(types.SET_BRAND, select))
                localStorage.setItem('brand', select)

            break;
            case 'Model':
                    //clear next steps
                    dispatch(actions.clearList(types.CLEAR_FUELS))
                    dispatch(actions.setSelect(types.SET_FUEL, false))
                    localStorage.removeItem('fuel')
                    localStorage.removeItem('fuelCode')
                    //set values
                    dispatch(actions.setSelect(types.SET_MODEL, select))
                    localStorage.setItem('model', select)
            break;
            case 'Typ paliwa':
                    const fuelSelect = selectList.filter(item=> item.name === select ? item.code : null)
                    const fuelCode = fuelSelect[0].code
                    dispatch(actions.setSelect(types.SET_FUEL, select))
                    dispatch(actions.setSelect(types.SET_FUEL_CODE, fuelCode))
                    localStorage.setItem('fuel', select)
                    localStorage.setItem('fuelCode', fuelCode)
            break;
            default: return
        }
    }

    const styleProps = {colorBrand: value  ? '#67AB1C' : '#000'}
    const classes = useStyles(styleProps);
    return ( 
        <FormControl classes={{root: classes.container}}>
        <Select
            disabled={disabled}
          renderValue={value=> value ? value : name }
          classes={{root: classes.select,icon: classes.iconSelect, disabled: classes.disabled}}
          variant='filled'
          value={value}
          onChange={handleChange}
          IconComponent={value ?  CheckCircle : ArrowDropDown}
        >
          {selectList ? (selectList.map((item,index) =>(<MenuItem key={index} value={item.name}>{item.name}</MenuItem>))) : null}
        </Select>
      </FormControl> );
}
 
export default FormSelect;