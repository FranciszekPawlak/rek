import types from './types'

const INITIAL_STATE = {
    brandsList: [],
    modelsList: [],
    fuelsList: [],
    brandSelect: false,
    modelSelect: false,
    fuelSelect: false
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
        case types.SET_BRAND:
            return ({
                ...state,
                brandSelect: action.item
            })
        case types.SET_MODEL:
            return ({
                ...state,
                modelSelect: action.item
            })
        case types.SET_FUEL:
            return ({
                ...state,
                fuelSelect: action.item
            })

        default:
            return state
    }

}
export default widgetReducer