import types from './types'
const addBrand = item => ({
    type: types.ADD_BRAND,
    item
})
const addModel = item => ({
    type: types.ADD_MODEL,
    item
})
const addFuel = item => ({
    type: types.ADD_FUEL,
    item
})
const setModel = item => ({
    type: types.BRAND_SELECT,
    item
})
const setBrand = item => ({
    type: types.BRAND_SELECT,
    item
})
const setFuel = item => ({
    type: types.BRAND_SELECT,
    item
})

export default {
    addBrand,
    addModel,
    addFuel,
    setBrand,
    setModel,
    setFuel
}