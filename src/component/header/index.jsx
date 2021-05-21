import React, { useState ,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../resourses/img/logo.webp'
import {InputSearch} from '../../actions/search'
Header.propTypes = {
    
};

function Header(props) {
    const dispatch = useDispatch()
    function handleChangeSearch(e){
        dispatch(InputSearch(e.target.value))
    }
    return (
        <div>
                 <header className="header">
                <div className="container header__container">
                    <a href="" className="logo"><img src={logo} alt="" srcSet=""/></a>
                    <a href="" className="logoname">amazing</a>
                    <div className="search">
                        <input type="text" id="input__search"onChange={(event) => handleChangeSearch(event)} />
                        <FontAwesomeIcon icon="search"></FontAwesomeIcon>
                    </div>
                </div>
            </header>
            </div>
    );
}

export default Header;