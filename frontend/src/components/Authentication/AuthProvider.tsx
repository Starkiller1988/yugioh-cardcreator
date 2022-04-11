import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

interface Token {
  token: string;
}

interface Param {
  children?: any;
}

export default function AuthProvider({ children }: Param) {
  const [token, setToken] = useState(localStorage.getItem("jwt") ?? "");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("jwt", token);
   /* if (token) {
      setTimeout(() => navigate("/welcome"));
    } else {
      setTimeout(() => navigate("/login"));
    } */
  }, [token, navigate]);

  const register = (
    username: string,
    password: string,
    passwordAgain: string
  ) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        passwordAgain,
      }),
    });
  };

  const login = (username: string, password: string) => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 401 || response.status === 403) {
          throw Error("Username or Password are invalid");
        }
        return response.json();
      })
      .then((token: Token) => setToken(token.token))
      .then(() => navigate("/welcome"));
  };

  const logout = () => {
    setToken("");
    navigate("/login");
  };

  return (

      <AuthContext.Provider value={{ token, register, login, logout }}>
        {children}
      </AuthContext.Provider>

  );
}

export const useAuth = () => useContext(AuthContext);


