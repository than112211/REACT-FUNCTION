
const Brand =  (state = [] ,action) => {
    switch (action.type){
        case 'ADD_BRAND' : {
          return [...state,action.payload]
        }
        case 'REMOVE_BRAND' : {
          let newid = [...state]
          newid.splice(state.indexOf(action.payload),1)
            return newid
        }
        case 'CLEARBRAND' : {
        return []
        }
        default : return state
    }
}
export default Brand