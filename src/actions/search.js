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

