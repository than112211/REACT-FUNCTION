import PropTypes from 'prop-types';
import React, { useState ,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import './index.scss'
Product.propTypes = {
    
};

function Product(props) {
    const product = useSelector(state => state.product.product)
    const search = useSelector(state => state.search)
    const getHighlightedText =  (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span> { parts.map((part, i) => 
            <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { color: 'red' } : {} }>
                { part }
            </span>)
        } </span>;
    }
    return (
        <div className="row">
        {product ? 
        product.map(product =>{
          return <div className="col-4 col-sm-4">
                        <div className="card__container">
                            <div className="card__img">
                                <img src={`http://localhost:8080/img/${product.img}`} alt="Product image" srcset=""/>
                            </div>
                            <div className="card__content">
                            <h1>{search ? getHighlightedText(product.name,search) : product.name}</h1>
                                <h3>{product.price}$</h3>
                                <div className="rating__product">
                                     {[...Array(product.rating)].map(() =>{
                                         return   <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                     })}
                                </div>
                                <div className="btn__buy">
                                <Button color="primary">Buy</Button>{' '}
                                </div>
                            </div>
                        </div>
                 </div>
          
        }) : <></>}
        </div>
    );
}

export default Product;