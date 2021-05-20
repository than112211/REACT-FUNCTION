export const FilterRating = (id) => {
    return {
        type: 'FILTERRATING',
        payload:id
    }
}
export const ClearRating = () => {
    return {
        type: 'CLEARRATING',
    }
}

