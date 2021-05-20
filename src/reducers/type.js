
const Type =  (state = [] ,action) => {
    switch (action.type){
        case 'ADD_TYPE' : {
        return [...state,action.payload]
        }
        case 'REMOVE_TYPE' : {
            let newid = [...state]
            newid.splice(state.indexOf(action.payload),1)
        return newid
        }
        case 'CLEARTYPE' : {
        return []
        }
        default : return state
    }
}
export default Type