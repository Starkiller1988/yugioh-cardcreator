import { useState } from "react"
import { useAuth } from "./AuthProvider";

import "./RegisterForm.css";

export default function RegisterForm() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const { login, register } = useAuth();

    const doRegister = () => {
        register(username, password, passwordAgain)
            .then(response => {
                if (response.status === 400) {
                    setErrorMessage('Passwords do not match');
                } else if (response.status === 409) {
                    setErrorMessage('Username is already taken');
                }
            });
    };
    
    const doLogin = () => {
        login(loginUsername, loginPassword)
            .catch(e => setErrorMessage(e.message));
    };

    return (
        <>
            <div>
                <input data-testid="login-username" type="text" placeholder="Username" value={loginUsername} onChange={ev => setLoginUsername(ev.target.value)} />
                <input data-testid="login-password" type="password" placeholder="Passwort" value={loginPassword} onChange={ev => setLoginPassword(ev.target.value)} />
                <button data-testid="login-button" onClick={doLogin}>Login</button>
            </div>
            <div>
                <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <input type="password" placeholder="Repeat Password" value={passwordAgain} onChange={ev => setPasswordAgain(ev.target.value)} />
                <button onClick={doRegister}>Register</button>
            </div>
            { errorMessage && <div data-testid="error-message" className="error">{errorMessage}</div> }
        </>
        
    )
}