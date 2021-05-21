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
export const FetchDataCategory = (id) => {
    return {
        type: 'FETCH_CATEGORY',
        payload:id
    }
}


