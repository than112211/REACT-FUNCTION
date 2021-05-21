import PropTypes from 'prop-types';
import React, { useState ,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import {FilterCategory,ClearCategory,FetchDataCategory} from '../../../actions/category'

Category.propTypes = {
    
};

function Category(props) {
    const [category,setCategory] = useState([])
    const [idCategory,setIDCategory] = useState(1)
    const dispatch = useDispatch()
    const idcategory = useSelector(state => state.category)
    useEffect(() => {
        function getCategory() {
                const url = 'http://localhost:3000/categories';
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
                    setCategory(data)
                })
        }
        getCategory();
    },[])
    function handleClickCategory(id) {
        dispatch(FilterCategory({
            idCategory:id,
            idDetailCategory:null
          }))
        setIDCategory(id)
    }
    function handleClickDetailCategory(id) {
        dispatch(FilterCategory({
            idCategory:idCategory,
            idDetailCategory:id
          }))
    }
    return (
        <div className="filter category">
        <h1 className="title__filter">Category</h1>
       <ul>
            {category.map((category,index) =>{
                return <div className="filter__item category__item">
                        <li onClick={() => handleClickCategory(index+1)}>{category.name}
                        
                        </li>
                        <ul className="sub__category" style={{display: idcategory.idCategory == index+1 ? 'block' : 'none'}} >
                            {category.detail_category.map((detail,i) =>{
                                return <li  onClick={() => handleClickDetailCategory(i+1)}>{detail.name}</li>
                            })}
                        </ul>
                    </div>
               
            })}
       </ul>
    </div>
    );
}

export default Category;