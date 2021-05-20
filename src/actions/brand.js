export const AddBrand = (id) => {
    return {
        type: 'ADD_BRAND',
        payload:id
    }
}
export const RemoveBrand = (id) => {
    return {
        type: 'REMOVE_BRAND',
        payload:id
    }
}
export const ClearBrand = () => {
    return {
        type: 'CLEARBRAND',
        
    }
}

