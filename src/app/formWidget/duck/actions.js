const addItem = (listName, item, itemHelper) => ({
    type: listName,
    item,
    itemHelper
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