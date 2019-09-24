const initialStore = {

}
const widgetReducer = (store = {
    initialStore
}, action) => {
    switch (action.type) {
        case 'GETBrand':
            return store

        default:
            return store
    }

}
export default widgetReducer