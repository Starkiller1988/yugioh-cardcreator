import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import logo from "../../Media/Images/logo.png"
import "./RegisterForm.css"

function LoginForm() {


    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    const { login } = useAuth();

    const doLogin = () => {
        login(loginUsername, loginPassword);
    };

  return (
    <>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <h1 className="title">Waking the Cards</h1>
      </div>
        <div className="input">
                <input className="input-item" data-testid="login-username" type="text" placeholder="Username" value={loginUsername} onChange={ev => setLoginUsername(ev.target.value)} />
                <input className="input-item" data-testid="login-password" type="password" placeholder="Passwort" value={loginPassword} onChange={ev => setLoginPassword(ev.target.value)} />
                <button className="input-item" data-testid="login-button" onClick={doLogin}>Login</button>
        </div>
        <div className="register-link">
        <Link className="reg" to="/">
        <p>Register</p>
        </Link>
        </div>
    </>
  )
}

export default LoginForm