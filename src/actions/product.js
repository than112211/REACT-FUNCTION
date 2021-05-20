export const ToTalProduct = (product) => {
    return {
        type: 'SET_PRODUCT',
        payload:product
    }
    
}
export const CountProduct = (number) => {
    return {
        type: 'TOTAL_PRODUCT',
        payload:number
    }
    
}



