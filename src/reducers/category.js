const init = {
    idCategory:1,
    idDetailCategory:null
}
const Category =  (state = init ,action) => {
    switch (action.type){
        case 'FILTERCATEGORY' : {      
                   
            return action.payload
        }
        case 'CLEARCATEGORY' : {  
            return init
        }
        default : return state
    }
}
export default Category