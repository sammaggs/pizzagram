import React from 'react';
import '../../styles/css/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="jumbotron jumbotron-fluid text-light bg-info pizzagram-header">
            <div className="container d-flex justify-content-center">
                <Link to="/">
                <h1 className="display text-light pizzagram-header-text pizzagram-text-shadow">pizzagram</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;