export const FilterSearch = (product) => {
    return {
        type: 'FILTERSEARCH',
        payload:product
    }
}
export const ClearSearch = () => {
    return {
        type: 'CLEARSEARCH',
    }
}
export const InputSearch = (char) => {
    return {
        type: 'SET_INPUT_SEARCH',
        payload:char
    }
}

