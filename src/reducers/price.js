
const Price =  (state = [] ,action) => {
    switch (action.type){
        case 'FILTERPRICE' : {
        return action.payload
        }
        case 'CLEARPRICE' : {
          return []
          }
        default : return state
    }
}
export default Price