import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import logo from "../../Media/Images/logo.png"

import "./RegisterForm.css";

export default function RegisterForm() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const { register } = useAuth();

    const doRegister = () => {
        register(username, password, passwordAgain)
            .then(response => {
                if (response.status === 400) {
                    setErrorMessage('Passwords do not match');
                } else if (response.status === 409) {
                    setErrorMessage('Username is already taken');
                } else if (response.status === 201){
                    setErrorMessage('User is created successfully. Please go to the Login Site.');
                }
            });
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
                <input className="input-item" type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)} />
                <input className="input-item" type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <input className="input-item" type="password" placeholder="Repeat Password" value={passwordAgain} onChange={ev => setPasswordAgain(ev.target.value)} />
            </div>
            <div className="submit">
            <button className="submit-item" onClick={doRegister}>Submit</button>
            </div>
            <div className="login-link">
            <Link className="reg" to="/">
            <p>Login</p>
            </Link>
            </div>
            <div className="error">
            { errorMessage && <div data-testid="error-message" className="errortext">{errorMessage}</div> }
            </div>
        </>
        
    )
}