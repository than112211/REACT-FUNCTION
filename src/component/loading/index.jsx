import PropTypes from 'prop-types';
import React, { useState ,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import gif_loading from '../../resourses/img/loading.gif'
import './index.scss'
Loading.propTypes = {
    
};

function Loading(props) {
    const status = useSelector(state => state.loading.show)
    return (
        <div className="loading" style={{display: status ? 'block' : 'none'}}>
            <img src={gif_loading} alt="loading" srcset="" />
        </div>
    );
}

export default Loading;