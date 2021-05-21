const init = {
    show:false
}
const Loading =  (state = init ,action) => {
    switch (action.type){
        case 'SHOW_LOADING' : {  
            return {
                ...state,
                show:true
            }
        }
        case 'HIDEN_LOADING' : {  
            return {
                ...state,
                show:false
            }
        }
        default : return state
    }
}
export default Loading