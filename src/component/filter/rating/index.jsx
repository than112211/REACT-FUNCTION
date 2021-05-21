import PropTypes from 'prop-types';
import React, { useState ,useEffect} from 'react';
import {FilterRating} from '../../../actions/rating'
import {useSelector,useDispatch} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
Rating.propTypes = {
    
};

function Rating(props) {
    const [rating,setRating] = useState([1,2,3,4,5])
    const [product,setProduct] = useState([])
    const dispatch = useDispatch()
    const idcategory = useSelector(state => state.category)
    const type = useSelector(state => state.type)
    const brand = useSelector(state => state.brand)
    const {idCategory,idDetailCategory} = idcategory
    useEffect(() => {
        function getCountProduct() {
            const url = `http://localhost:3000/products?category=${idCategory}${idDetailCategory ? `&detail_category=${idDetailCategory}`:``}${handleTypeChecked(type) ? handleTypeChecked(type) : ``}${handleBrandChecked(brand) ? handleBrandChecked(brand) : ``}`;
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
        getCountProduct()

    },[idcategory,type,brand])
    function handleTypeChecked(id){
        var str = ''
       id.map(check => {
            str += `&type=${check}`
        })
        return str
        
    }
    function handleBrandChecked(id){
        var str = ''
       id.map(check => {
            str += `&brand=${check}`
        })
        return str
        
    }
    function handleTotalProduct(id){
        let number = 0
        product.map(product =>{
            if(product.rating == id) number+=1
        })
       return number
    }
    function handleClickRating(id){
      dispatch(FilterRating(id))
    }
    return (
        <div className="filter rating">
        <h1 className="title__filter">Rating</h1>
       {
           rating.map((rating,index) =>{
               return  <div className="filter__item rating__item" onClick = {() => handleClickRating(index+1)} >
                             {
                                  [...Array(index+1)].map(() => {
                                      return <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                  })
                             }
                              ({handleTotalProduct(index+1)})
                         </div>
             })
                                               

           }
       
     
    </div>
    );
}

export default Rating;