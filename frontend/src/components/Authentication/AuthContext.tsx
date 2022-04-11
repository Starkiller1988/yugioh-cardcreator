import { createContext } from 'react'

export interface Context {
    register: (username: string, password: string, passwordAgain: string) => Promise<Response>;
    token: string;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export default createContext({} as Context)