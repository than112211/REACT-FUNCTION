import React, { useState ,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import PropTypes from 'prop-types';
import {AddBrand,RemoveBrand,ClearBrand} from '../../../actions/brand'
import '../index.scss'
Brand.propTypes = {
    
};

function Brand(props) {
    const [brand,setBrand] = useState([])
    const [product,setProduct] = useState([])
    const dispatch = useDispatch()
    const idcategory = useSelector(state => state.category)
    const type = useSelector(state => state.type)
    const {idCategory,idDetailCategory} = idcategory
    useEffect(() => {
        function getBrand() {
            const url = `http://localhost:3000/brands?category_id=${idCategory}`;
            const option = {
                method : 'GET',
                mode : 'cors',
                headers: {
                    'Content-Type' : 'application/json',
                },
            }
            fetch(url,option)
            .then(response => response.json())
            .then(data => {
                setBrand(data[0].brand)
            })
        }
        function getCountProduct() {
            const url = `http://localhost:3000/products?category=${idCategory}${idDetailCategory ? `&detail_category=${idDetailCategory}`:``}${handleTypeChecked(type) ? handleTypeChecked(type) : ``}`;
            const option = {
                method : 'GET',
                mode : 'cors',
                headers: {
                    'Content-Type' : 'application/json',
                },
            }
            fetch(url,option)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
            })
        }
        getBrand();
        getCountProduct()

    },[idcategory,type])
    function handleChangeCheckBrand(e,id) {
        if(e.target.checked) {
            dispatch(AddBrand(id))
             }
         else {
             dispatch(RemoveBrand(id))
         }
    }
    function handleTotalProduct(id){
        let number = 0
        product.map(product =>{
            if(product.brand == id) number+=1
        })
       return number
    }
    function handleTypeChecked(id){
        var str = ''
       id.map(check => {
            str += `&type=${check}`
        })
        return str
        
    }
    return (
        <div className="filter type">
        <h1 className="title__filter">Brand</h1>
        <ul>
                {brand.map((brand,index) =>{
                    return <div className="filter__item brand__item" style={{display : handleTotalProduct(index+1) > 0  ? 'block' : 'none'}}>
                            <li > <input  onChange={ (event) => handleChangeCheckBrand(event,index+1)}  type="checkbox"></input>{brand.name} 
                                ({handleTotalProduct(index+1)})
                            </li>
                        </div>
                
                })}
        </ul>
    </div>
    );
}

export default Brand;