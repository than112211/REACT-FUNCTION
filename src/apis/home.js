import store from '../store'
import {CountProduct} from '../actions/product'

export const getProductHome =  () =>{
    const state = store.getState(state => state)
    const {idCategory,idDetailCategory} = state.category
    const {page,limit} = state.pagination
    const url = `http://localhost:3000/products?category=${idCategory}${idDetailCategory ?`&detail_category=${idDetailCategory}`:``}&_page=${page}&_limit=${limit}`;
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