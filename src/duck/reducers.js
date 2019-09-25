import types from './types'

const INITIAL_STATE = {
    brandsList: [],
    modelsList: [],
    fuelsList: [],
    brandSelect: false,
    modelSelect: false,
    fuelSelect: false,
}
const widgetReducer = (state =
    INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_BRAND:
            return {
                ...state, brandsList: [...state.brandsList, action.item]
            }
            case types.ADD_MODEL:
                return {
                    ...state, modelsList: [...state.modelsList, action.item]
                }
                case types.ADD_FUEL:
                    return {
                        ...state, fuelList: [...state.fuelList, action.item]
                    }
                    case types.BRAND_SELECT:
                        return {
                            ...state, brandSelect: action.item
                        }
                        case types.MODEL_SELECT:
                            return {
                                ...state, modelSelect: action.item
                            }
                            case types.FUEL_SELECT:
                                return {
                                    ...state, fuelSelect: action.item
                                }

                                default:
                                    return state
    }

}
export default widgetReducer