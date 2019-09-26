import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem,  FormControl,  Select} from '@material-ui/core';
import {ArrowDropDown, CheckCircle} from '@material-ui/icons'
import { connect } from 'react-redux'
import operations from '../duck/operations'
import actions from '../duck/actions'
import FormButton from './FormButton'
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
    iconBrand:{
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


const Form = ({ brandsList, modelsList, fuelsList,getBrands,getModels,getFuels, clearList}) => {
    //get storage data
    const brandStorage = localStorage.getItem('brand')
    const modelStorage = localStorage.getItem('model')
    const fuelStorage = localStorage.getItem('fuel')
    //local state with initial value
    const [brandValue, setBrandValue] = React.useState(brandStorage === null ? false : brandStorage);
    const [modelValue, setModelValue] = React.useState(modelStorage === null ? false : modelStorage);
    const [fuelValue, setFuelValue] = React.useState(fuelStorage === null ? false : fuelStorage);
    //handle select fields
    const handleChangeBrand = event => {
      setBrandValue(event.target.value)
      clearList(types.CLEAR_MODELS)
      clearList(types.CLEAR_FUELS)
      setModelValue(false)
      setFuelValue(false)
      localStorage.setItem('brand', event.target.value)
    };
    const handleChangeModel = event => {
      setModelValue(event.target.value)
      clearList(types.CLEAR_FUELS)
      setFuelValue(false)
      localStorage.setItem('model', event.target.value)
    };
    const handleChangeFuel = event => {
      setFuelValue(event.target.value)
      localStorage.setItem('fuel', event.target.value)
    };
    //handle api data
    useEffect(()=>{
      getBrands()
      if(typeof brandValue === 'string') {
        getModels(brandValue)
      }
      if(typeof brandValue === 'string' && typeof modelValue === 'string') {
        getFuels(brandValue,modelValue)
      }
        
    },[getBrands, getModels, getFuels, brandValue, modelValue ])


const styleProps = {colorBrand: brandValue  ? '#67AB1C' : '#000',colorModel: modelValue  ? '#67AB1C' : '#000',colorFuel: fuelValue  ? '#67AB1C' : '#000'}
const classes = useStyles(styleProps);

return (<>
    <FormControl classes={{root: classes.container}}>
      <Select
        renderValue={brandValue=> brandValue ? brandValue : 'Marka' }
        classes={{root: classes.select,icon: classes.iconBrand, disabled: classes.disabled}}
        variant='filled'
        value={brandValue}
        onChange={handleChangeBrand}
        IconComponent={brandValue ?  CheckCircle : ArrowDropDown}
      >
        {brandsList ? (brandsList.map((brand,index) =>(<MenuItem key={index} value={brand}>{brand}</MenuItem>))) : null}
      </Select>
    </FormControl>
    <FormControl classes={{root: classes.container}}>
      <Select
        disabled={brandValue ? false : true}
        renderValue={modelValue=> modelValue ? modelValue : 'Model' }
        classes={{root: classes.select,icon: classes.iconModel, disabled: classes.disabled}}
        variant='filled'
        value={modelValue}
        onChange={handleChangeModel}
        IconComponent={modelValue ?  CheckCircle : ArrowDropDown}
      >
        {modelsList ? (modelsList.map((model,index) =>(<MenuItem key={index} value={model}>{model}</MenuItem>))) : null}
      </Select>
    </FormControl>
    <FormControl classes={{root: classes.container}}>
      <Select
        disabled={modelValue ? false : true}
        renderValue={fuelValue=> fuelValue ? fuelValue : 'Typ paliwa' }
        classes={{root: classes.select,icon: classes.iconFuel, disabled: classes.disabled}}
        variant='filled'
        value={fuelValue}
        onChange={handleChangeFuel}
        IconComponent={fuelValue ?  CheckCircle : ArrowDropDown}
      >
        {fuelsList ? (fuelsList.map((fuel,index) =>(<MenuItem key={index} value={fuel}>{fuel}</MenuItem>))) : null}
      </Select>
    </FormControl>
    <FormButton disabled={brandValue && modelValue ? false : true} url={`https://www.mfind.pl/ubezpieczenie-oc-ac/kalkulator-oc-ac?make_name=${brandValue}&model_name=${modelValue}`}></FormButton>
    </>);
}


const mapStateToProps = state =>({
brandsList: state.brandsList,
modelsList: state.modelsList,
fuelsList: state.fuelsList,
})
const mapDispatchToProps = dispatch =>({
  getBrands: ()=> dispatch(operations.getAllBrands()),
  getModels: (brand)=> dispatch(operations.getAllModels(brand)),
  getFuels: (brand,model)=> dispatch(operations.getAllFuels(brand,model)),
  clearList: listName => dispatch(actions.clearList(listName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
