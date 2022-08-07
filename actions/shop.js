const ADD_ITEM = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    }
}

const REMOVE_ITEM = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id
    }
}

