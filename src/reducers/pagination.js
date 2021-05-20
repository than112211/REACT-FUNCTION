const page = {
    page:1,
    limit:9
}
const Pagination =  (state = page ,action) => {
    switch (action.type){
        case 'PAGINATION' : {
        return {
            ...state,
            page:action.payload
        }
        }
        case 'NEXT_PAGE' : {
            return {
                ...state,
                page:state.page+1
            }
            }
            case 'PRE_PAGE' : {
                return {
                    ...state,
                page:state.page-1
                }
                }
                case 'RESET_PAGE' : {
                    return {
                        ...state,
                    page:1
                    }
                    }
        default : return state
    }
}
export default Pagination