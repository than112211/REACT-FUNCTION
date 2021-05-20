
const Search =  (state = {} ,action) => {
    switch (action.type){
        case 'FILTERSEARCH' : {
          state = action.payload
        return state
        }
        case 'CLEARSEARCH' : {
           state = {}
        return state
        }
    
        default : return state
    }
}
export default Search