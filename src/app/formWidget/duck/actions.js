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
const clearList = listName => ({
    type: listName
})

export default {
    addBrand,
    addModel,
    addFuel,
    clearList
}