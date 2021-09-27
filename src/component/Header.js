import React from 'react'
import './Styles-Header.scss';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from './img/Logo.svg'

const Header = props => {
    return (
        <div className='header-wrap'>
            <Link to="/home">Home</Link>
            <Link to="/home">
                <img src={logo} alt={"logo"}/> 
            </Link>
            <Link to="/blog">Blog</Link>
        </div>
    )
}

Header.propTypes = {

}

export default Header
