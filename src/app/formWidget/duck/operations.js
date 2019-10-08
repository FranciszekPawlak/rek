import axios from 'axios'
import actions from './actions'
import types from './types'
//handle brand data
const axiosBrands = async (x) => {
    axios.defaults.headers.common['Authorization'] = 'Basic YXV0a2FfYXBpOmF1dGthX2FwaV8yMDE5';
    const response = await axios({
        method: 'GET',
        url: 'https://api-dev.mfind.pl/cars'
    })
    const json = await response.data
    return json
}
const getAllBrands = () => async (dispatch) => {
    const brands = await axiosBrands()
    brands.map(brand => dispatch(actions.addItem(types.ADD_BRAND, brand.make_name)))
}

//handle model data
const axiosModels = async (brand) => {
    axios.defaults.headers.common['Authorization'] = 'Basic YXV0a2FfYXBpOmF1dGthX2FwaV8yMDE5';
    const response = await axios({
        method: 'GET',
        url: `https://api-dev.mfind.pl/cars/${brand}/models`
    })
    const json = await response.data
    return json
}
const getAllModels = (brand) => async (dispatch) => {
    const models = await axiosModels(brand)
    models.map(model => dispatch(actions.addItem(types.ADD_MODEL, model.model_name)))
}

//handle fuel data
const axiosFuels = async (brand, model) => {
    axios.defaults.headers.common['Authorization'] = 'Basic YXV0a2FfYXBpOmF1dGthX2FwaV8yMDE5';
    const response = await axios({
        method: 'GET',
        url: `https://api-dev.mfind.pl/cars/${brand}/models/${model}/fuels/`
    })
    const json = await response.data
    return json
}
const getAllFuels = (brand, model) => async (dispatch) => {
    const fuels = await axiosFuels(brand, model)
    fuels.map(model => dispatch(actions.addItem(types.ADD_FUEL, model.fuel_name, model.fuel_code)))
}

export default {
    getAllBrands,
    getAllModels,
    getAllFuels,
}