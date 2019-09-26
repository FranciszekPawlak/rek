import axios from 'axios'
import actions from './actions'

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
    brands.map(brand => dispatch(actions.addBrand(brand.make_name)))
}


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
    models.map(model => dispatch(actions.addModel(model.model_name)))
}


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
    fuels.map(model => dispatch(actions.addFuel(model.fuel_name)))
}

export default {
    getAllBrands,
    getAllModels,
    getAllFuels,
}