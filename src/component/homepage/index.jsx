import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Category from '../components/category'
import Type from '../components/type'
import Header from '../header/index'
import Product from '../components/product'
import Brand from '../components/brand'
import Rating from '../components/rating'
import Price from '../components/price'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './index.scss';
Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
               <Header ></Header>
               <div className="content">
               <div className="container">
                    <div className="row">
                    <div className="dropdown__filter">
                        <ButtonDropdown >
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
                        <Button className="btn__clear" color="danger" onClick={this.handleClickClearFilter}>Clear Filter</Button>
                        <Category ></Category>
                        <Type ></Type>
                        <Brand></Brand>
                        <Rating></Rating>
                        <Price ></Price>
                        </div>
                        </div>
                        <div className="col-9 col-sm-9">
                                <Product  ></Product>
                                {/* <div className="pagi">
                                <Pagination aria-label="Page navigation example">
                                        <PaginationItem disabled={pagination.page == 1 ? true : false} >
                                            <PaginationLink previous onClick={this.handleClickPrePage} />
                                        </PaginationItem>
                                                 {[...Array(total ? Math.ceil(total/pagination.limit) : 1)].map((total,index) =>{
                                                    return   <PaginationItem active={pagination.page == index+1 ? true : false} >
                                                    <PaginationLink onClick={() => this.handleClickPage(index+1)} >
                                                      {index+1}
                                                    </PaginationLink>
                                                  </PaginationItem>
                                                    })}
                                        <PaginationItem disabled={pagination.page >= Math.ceil(total/pagination.limit) ? true : false} >
                                            <PaginationLink next onClick={this.handleClickNextPage}  />
                                        </PaginationItem>
                                        </Pagination>
                                </div> */}
                        </div>
                    </div>
                </div>
               </div>
        </div>
    );
}

export default Home;