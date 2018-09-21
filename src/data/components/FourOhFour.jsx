import React from 'react';
import { Link } from "react-router-dom";

const FourOhFour = () => {
    return (
        <main className="container text-light">
            <h2 className="display pizzagram-header-text">Oops!</h2>
            <p className="lead">Looks like the page you're looking for doesn't exist.</p>
            <Link className="btn btn-primary" to="/">&lt; Back to home</Link>
        </main>
    )
};

export default FourOhFour;