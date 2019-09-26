import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Header = () => (
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content">
                <div className="Header-logo">
                    <Link to="/" >
                        <img src="https://designcrafts.online/wp-content/uploads/2018/06/dog-cat_dribbble.png" alt=""/>
                    </Link>
                </div>
                <div className="Header-nav">
                    <Nav/>
                </div>
            </div>
        </div>

    </div>


);


export default Header;