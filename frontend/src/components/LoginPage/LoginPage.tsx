import React from 'react';
import "./LoginPage.css"
import logo from "../../Media/Images/logo.png";


function LoginPage() {
    return (
        <>
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div>
                <h1 className="title">Waking the Cards</h1>
            </div>

        </>
    );
}

export default LoginPage;