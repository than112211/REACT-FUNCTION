import PropTypes from 'prop-types';
import React, { useState ,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import { Button } from 'reactstrap';
import Category from '../filter/category'
import Type from '../filter/type'
import Header from '../header/index'
import Product from '../product/index'
import Brand from '../filter/brand/'
import Rating from '../filter/rating'
import Price from '../filter/price'
import {SetFilterAsc,SetFilterDesc,ClearFilter} from '../../actions/home'
import {FilterPagination,NextPage,PrePage} from '../../actions/pagination'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './index.scss';
import { ToTalProduct,CountProduct } from '../../actions/product';
Home.propTypes = {
    
};

function Home(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const state = useSelector(state => state)
    const total = useSelector(state => state.product.total)
    const pagination = useSelector(state => state.pagination)
    const filter = useSelector(state => state.home)
    const dispatch = useDispatch()
    useEffect(() => {
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
            dispatch(CountProduct(response.headers.get('x-total-count')))
            return response.json()
        })
        .then(data =>{
            dispatch(ToTalProduct(data))
        })
    },[])

    function handleClickFilterAsc() {
        dispatch(SetFilterAsc())
    }
    function handleClickFilterDsc() {
        dispatch(SetFilterDesc())
    }
    function handleClickClearFilter() {
        dispatch(ClearFilter())
    }
    function handleClickPage(id){
        dispatch(FilterPagination(id))
     }
    function handleClickPrePage () {
         dispatch(PrePage())
     }
    function handleClickNextPage () {
         dispatch(NextPage())
     }
    return (
        <div>
               <Header ></Header>
               <div className="content">
               <div className="container">
                    <div className="row">
                    <div className="dropdown__filter">
                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
                            <DropdownToggle caret>
                                Filter
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={handleClickFilterAsc}>Price Asc</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={handleClickFilterDsc}>Price Dsc</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                        <div className="col-3 col-sm-3">
                        <div className="filter__container">
                        <Button className="btn__clear" style={{display:filter ? 'block' : 'none'}} color="danger" onClick={handleClickClearFilter}>Clear Filter</Button>
                        <Category ></Category>
                        <Type ></Type>
                        <Brand></Brand>
                        <Rating></Rating>
                        <Price ></Price>
                        </div>
                        </div>
                        <div className="col-9 col-sm-9">
                                <Product  ></Product>
                                <div className="pagi">
                                <Pagination aria-label="Page navigation example">
                                        <PaginationItem disabled={pagination.page == 1 ? true : false} >
                                            <PaginationLink previous onClick={handleClickPrePage} />
                                        </PaginationItem>
                                                 {[...Array(total ? Math.ceil(total/pagination.limit) : 1)].map((total,index) =>{
                                                    return   <PaginationItem active={pagination.page == index+1 ? true : false} >
                                                    <PaginationLink onClick={() => handleClickPage(index+1)} >
                                                      {index+1}
                                                    </PaginationLink>
                                                  </PaginationItem>
                                                    })}
                                        <PaginationItem disabled={pagination.page >= Math.ceil(total/pagination.limit) ? true : false} >
                                            <PaginationLink next onClick={handleClickNextPage}  />
                                        </PaginationItem>
                                        </Pagination>
                                </div>
                        </div>
                    </div>
                </div>
               </div>
        </div>
    );
}

export default Home;