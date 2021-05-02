import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Full stack web development</h1>
                <Typed
                className="typed-text"
                strings={["Web Designer", "Web Developer", "Farmer"]}
                typeSpeed={70}
                backSpeed={40}
                loop
                 />
                <a target="_blank" href="https://github.com/shoeb-akter" className="btn-main-offer">KNOW ME</a>
            </div>
        </div>
    );
};

export default Header;