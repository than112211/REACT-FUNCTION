export const FilterPrice = (arr) => {
    return {
        type: 'FILTERPRICE',
        payload:arr
    }
}
export const ClearPrice = () => {
    return {
        type: 'CLEARPRICE',
    }
}

