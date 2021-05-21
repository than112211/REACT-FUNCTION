
const Search =  (state = '' ,action) => {
    switch (action.type){
        case 'SET_INPUT_SEARCH': {
        return action.payload
        }
        case 'CLEARSEARCH' : {
        return ''
        }
        default : return state
    }
}
export default Search