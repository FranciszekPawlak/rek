import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem,  FormControl,  Select} from '@material-ui/core';
import {ArrowDropDown, CheckCircle} from '@material-ui/icons'
import { connect } from 'react-redux'
import operations from '../duck/operations'
import actions from '../duck/actions'
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

const INPUT_BRANDS = 'INPUT_BRANDS'
const INPUT_MODELS = 'INPUT_MODELS'
const INPUT_FUELS = 'INPUT_FUELS'

const FormInput = ({inputType, brandsList, modelsList, fuelsList, brandSelect, modelSelect,setBrand, setModel, setFuel, getBrands,getModels,getFuels, name}) => {
    const [inputValue, setInputValue] = React.useState(false);

    const handleChange = event => {
      switch(inputType){
        case INPUT_BRANDS:
            setInputValue(event.target.value)
            setBrand(event.target.value)
            break;
        case INPUT_MODELS:
            setInputValue(event.target.value)
            setModel(event.target.value)
            break;
        case INPUT_FUELS:
            setInputValue(event.target.value)
            setFuel(event.target.value)
            break;
        default:
          return
      }
    };

    useEffect(()=>{
      if(inputType === INPUT_BRANDS) {getBrands() }
      if(inputType === INPUT_MODELS && typeof brandSelect === 'string'){
        console.log('xD')
        getModels(brandSelect)
      }
      if(inputType === INPUT_FUELS && typeof modelSelect === 'string'){
        console.log(brandSelect, modelSelect)
        getFuels(brandSelect, modelSelect)
      }       
    },[getBrands,inputType, brandSelect, getModels, getFuels, modelSelect])


const styleProps = {color: inputValue  ? '#67AB1C' : '#000'}
    const classes = useStyles(styleProps);

return (<>
    
    <FormControl classes={{
      root: classes.container,
    }}>
      <Select
      disabled={inputType === INPUT_BRANDS || (inputType === INPUT_MODELS && brandSelect) || (inputType === INPUT_FUELS && modelSelect)? false : true}
        renderValue={value=> value ? value : name }
        classes={{
          root: classes.select,
          icon: classes.icon,
        }}
        variant='filled'
        value={inputValue}
        onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'age-simple'
        }}
        IconComponent={inputValue ?  CheckCircle : ArrowDropDown}
      >
        {inputType === INPUT_BRANDS ? (brandsList.map((brand,index) =>(<MenuItem key={index} value={brand}>{brand}</MenuItem>))) : null}

        {(inputType === INPUT_MODELS) && modelsList ? (modelsList.map((model,index) =>(<MenuItem key={index} value={model}>{model}</MenuItem>))) : null}

        {inputType === INPUT_FUELS && fuelsList ? (fuelsList.map((fuel,index) =>(<MenuItem key={index} value={fuel}>{fuel}</MenuItem>))) : null}
      </Select>
    </FormControl>
    </>);
}


const mapStateToProps = state =>({
brandsList: state.brandsList,
modelsList: state.modelsList,
fuelsList: state.fuelsList,
brandSelect: state.brandSelect,
modelSelect: state.modelSelect,
fuelSelect: state.fuelSelect,
})
const mapDispatchToProps = dispatch =>({
  getBrands: ()=> dispatch(operations.getAllBrands()),
  getModels: (brand)=> dispatch(operations.getAllModels(brand)),
  getFuels: (brand,model)=> dispatch(operations.getAllFuels(brand,model)),
  setBrand: (brand)=> dispatch(actions.setBrand(brand)),
  setModel: (model)=> dispatch(actions.setBrand(model)),
  setFuel: (fuel)=> dispatch(actions.setBrand(fuel)),

})

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
