import types from './types'

const INITIAL_STATE = {
    brandsList: [],
    modelsList: [],
    fuelsList: [],
}
const widgetReducer = (state =
    INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_BRAND:
            return ({
                ...state,
                brandsList: [...state.brandsList, action.item]
            })
        case types.ADD_MODEL:
            return ({
                ...state,
                modelsList: [...state.modelsList, action.item]
            })
        case types.ADD_FUEL:
            return ({
                ...state,
                fuelsList: [...state.fuelsList, action.item]
            })
        case types.CLEAR_BRANDS:
            return ({
                ...state,
                brandsList: []
            })
        case types.CLEAR_MODELS:
            return ({
                ...state,
                modelsList: []
            })
        case types.CLEAR_FUELS:
            return ({
                ...state,
                fuelsList: []
            })

        default:
            return state
    }

}
export default widgetReducer