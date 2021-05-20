export const FilterCategory = (category) => {
    return {
        type: 'FILTERCATEGORY',
        payload:category
    }
}
export const ClearCategory = () => {
    return {
        type: 'CLEARCATEGORY',
    }
}


