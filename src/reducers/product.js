const init = {
    product:[],
    total:null
}
const Product =  (state = init,action) => {
    switch (action.type){
        case 'SET_PRODUCT' : {            
        return {
            ...state,
            product:action.payload
        }
        }
        case 'TOTAL_PRODUCT' : {            
            return {
                ...state,
                total:action.payload
            }
            }
        default : return state
    }
}
export default Product