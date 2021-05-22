import React, { useState ,useEffect, useRef} from 'react';
import {useSelector,useDispatch} from "react-redux"
import PropTypes from 'prop-types';
import {AddType,RemoveType} from '../../../actions/type'
Type.propTypes = {
    
};

function Type(props) {
    const [type,setType] = useState([])
    const [product,setProduct] = useState([])
    const dispatch = useDispatch()
    const idcategory = useSelector(state => state.category)
    const {idCategory,idDetailCategory} = idcategory

    useEffect(() => {
        function getType() {
            const url = `http://localhost:3000/types?category_id=${idCategory}`;
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
                setType(data[0].type)
            })
        }
        function getCountProduct() {
            const url = `http://localhost:3000/products?category=${idCategory}${idDetailCategory ? `&detail_category=${idDetailCategory}`:``}`;
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
        getType();
        getCountProduct()

    },[idcategory])
    function handleChangeCheckType(e,id){
        if(e.target.checked) {
           dispatch(AddType(id))
            }
        else {
            dispatch(RemoveType(id))
        }
    }
    function handleTotalProduct(id){
        let number = 0
        product.map(product =>{
            if(product.type == id) number+=1
        })
       return number
    }

    return (
        <div>
            <div className="filter type">
            <h1 className="title__filter">Type</h1>
            <ul>
                {type.map((type,index) =>{
                    return <div className="filter__item type__item" style={{display : handleTotalProduct(index+1) > 0  ? 'block' : 'none'}}>
                            <li > <input ref={checkType} onChange={ (event) => handleChangeCheckType(event,index+1)}   type="checkbox"></input>{type.name} 
                                ({handleTotalProduct(index+1)})
                            </li>
                        </div>
                   
                })}
           </ul>
        </div>
        </div>
    );
}

export default Type;