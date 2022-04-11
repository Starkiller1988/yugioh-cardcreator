import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage';
import CardDataBase from './components/CardDataBase/CardDataBase';
import CardCreator from './components/CardCreator/CardCreator';
import AboutThisApp from './components/AboutThisApp/AboutThisApp';
import Landingpage from './components/LandingPage/Landingpage';
import RegisterForm from './components/Authentication/RegisterForm';
import LoginForm from './components/Authentication/LoginForm';



function App() {

return(

<div>
        <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/welcome" element={<WelcomePage />}/>
        <Route path="/home" element={<Landingpage />}/>
        <Route path="/database" element={<CardDataBase />}/>
        <Route path="/creator" element={<CardCreator />}/>
        <Route path="/about" element={<AboutThisApp />}/>
        </Routes>
</div>


)

}

export default App;
