import store from '../store'
import {ToTalProduct,CountProduct} from '../actions/product'

function handleTypeChecked(id){
    var str = ''
   id.map(check => {
        str += `&type=${check}`
    })
    return str
}
export const getProductType =  () =>{
    const state = store.getState(state => state)
    const {idCategory,idDetailCategory} = state.category
    const {type} = state
    const {page,limit} = state.pagination
    const url = `http://localhost:3000/products?category=${idCategory}${idDetailCategory ?`&detail_category=${idDetailCategory}`:``}${type ? handleTypeChecked(type) : ``}&_page=${page}&_limit=${limit}`;
    const option = {
        method : 'GET',
        mode : 'cors',
        headers: {
            'Content-Type' : 'application/json',
        },
    }
    return fetch(url,option)
    .then(response => {
        store.dispatch(CountProduct(response.headers.get('x-total-count')))
        return response.json()
    })
    .then(data =>{
        return {
            status: 'SUCCESS',
            data:data
        }
    })
}