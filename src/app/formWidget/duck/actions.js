const addItem = (listName, item) => ({
    type: listName,
    item
})

const clearList = listName => ({
    type: listName
})
const setSelect = (selectName, item) => ({
    type: selectName,
    item
})

export default {
    addItem,
    clearList,
    setSelect
}