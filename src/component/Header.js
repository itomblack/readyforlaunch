import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from './img/Logo.svg'

const Header = props => {
    return (
        <div>
            <Link to="home">Home</Link>
            <Link to="blog">Blog</Link>
            <h1>Blog Header</h1>
            <Link to="home">
                <img src={logo} alt={"logo"}/> 
            </Link>
           
        </div>
    )
}

Header.propTypes = {

}

export default Header
