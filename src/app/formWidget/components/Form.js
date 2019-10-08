import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import operations from '../duck/operations'
import actions from '../duck/actions'
import FormButton from './FormButton.jsx'
import types from '../duck/types'
import FormSelect from './FormSelect'

const Form = () => {
    const dispatch = useDispatch()
    // get state
    const brandsList = useSelector(state=> state.brandsList)
    const modelsList = useSelector(state=> state.modelsList)
    const fuelsList = useSelector(state=> state.fuelsList)
    const brandSelect = useSelector(state=> state.brandSelect)
    const modelSelect = useSelector(state=> state.modelSelect)
    const fuelSelect = useSelector(state=> state.fuelSelect)
    const fuelCode = useSelector(state=> state.fuelCode)
    //localstorage
    const brandStorage = localStorage.getItem('brand')
    const modelStorage = localStorage.getItem('model')
    const fuelStorage = localStorage.getItem('fuel')
    const fuelCodeStorage = localStorage.getItem('fuelCode')
    //set initial values from localstorage
    useEffect(()=>{
        if(brandStorage && brandStorage !== 'null')dispatch(actions.setSelect(types.SET_BRAND, brandStorage))
        if(modelStorage && modelStorage !== 'null')dispatch(actions.setSelect(types.SET_MODEL, modelStorage))
        if(fuelStorage && fuelStorage !== 'null')dispatch(actions.setSelect(types.SET_FUEL, fuelStorage))
        if(fuelCodeStorage && fuelCodeStorage !== 'null')dispatch(actions.setSelect(types.SET_FUEL_CODE, fuelCodeStorage))
    },[])

    //get select options
    useEffect(()=>{
      if(brandsList.length === 0) dispatch(operations.getAllBrands())
      if(modelsList.length === 0 && typeof brandSelect === 'string') dispatch(operations.getAllModels(brandSelect))
      if(fuelsList.length === 0 && typeof (brandSelect,modelSelect) === 'string') dispatch(operations.getAllFuels(brandSelect,modelSelect))
    },[brandSelect, modelSelect])
    
const buttonUrl = `https://www.mfind.pl/ubezpieczenie-oc-ac/kalkulator-oc-ac?make_name=${brandSelect}&model_name=${modelSelect}&fuel_code=${fuelCode}`

return (<>
    <FormSelect name="Marka" selectList={brandsList} value={brandSelect} disabled={false}></FormSelect>
    <FormSelect name="Model" selectList={modelsList} value={modelSelect} disabled={typeof brandSelect === 'string'? false: true}></FormSelect>
    <FormSelect name="Typ paliwa" selectList={fuelsList} value={fuelSelect} disabled={typeof (brandSelect, modelSelect)==='string' ? false : true}></FormSelect>
    <FormButton disabled={fuelCode ? false : true}  url={buttonUrl} name={'oblicz składkę'}></FormButton>
    </>);
}

export default Form;
