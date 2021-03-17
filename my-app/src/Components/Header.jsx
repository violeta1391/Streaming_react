import React from 'react';

const Header = () => {
    return (
        <nav className="navbar justify-content-between bg-primary">
            <h2 className="font-weight-bold text-white">DEMO Streaming</h2>
            <form className="form-inline" id="navbar-form">
                <button className="btn btn_nav bg-primary text-white" type="submit">Log in</button>
                <button className="btn bg-dark text-white" type="submit">Start your free trial</button>
            </form>
        </nav>
    );
}

export default Header;