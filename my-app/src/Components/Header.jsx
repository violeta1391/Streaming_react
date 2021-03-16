import React from 'react';

const Header = () => {
    return (
        <nav className="navbar justify-content-between container-fluid text-white bg-primary font-weight-bold">
            <h2 className="font-weight-bold">DEMO Streaming</h2>
            <form className="form-inline" id="navbar-form">
                <button className="btn my-2 my-sm-0 btn_nav bg-primary text-white pr-2" type="submit">Log in   </button>
                <button className="btn my-2 my-sm-0 bg-dark text-white" type="submit">Start your free trial</button>
            </form>
        </nav>
    );
}

export default Header;