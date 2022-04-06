import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage';
import CardDataBase from './components/CardDataBase/CardDataBase';
import CardCreator from './components/CardCreator/CardCreator';
import AboutThisApp from './components/AboutThisApp/AboutThisApp';
import Landingpage from './components/LandingPage/Landingpage';
import LoginPage from "./components/LoginPage/LoginPage";

function App() {

return(

<div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
        <Route path="/welcome" element={<WelcomePage />}/>
        <Route path="/home" element={<Landingpage />}/>
        <Route path="/database" element={<CardDataBase />}/>
        <Route path="/creator" element={<CardCreator />}/>
        <Route path="/about" element={<AboutThisApp />}/>
        </Routes>
    </BrowserRouter>
</div>


)

}

export default App;
