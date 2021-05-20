
const Home =  (state = false ,action) => {
    switch (action.type){
        case 'CLEAR_FILTER' : {  
            return false
        }
        case 'SET_FILTER' : {  
            return true
        }
        default : return state
    }
}
export default Home