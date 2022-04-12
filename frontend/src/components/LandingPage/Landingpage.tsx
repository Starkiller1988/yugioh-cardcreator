import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import logo from "../../Media/Images/logo.png";
import yugimuto from "../../Media/Images/yugi-muto.png";
import setokaiba from "../../Media/Images/seto-kaiba.png";
//@ts-ignore: Unreachable module error
import yugi from "../../Media/Sound/intro.mp3";
import { useAuth } from '../Authentication/AuthProvider';

function Landingpage() {

  const { logout } = useAuth();

  return (
    <>
    <div>
      <button className="logmeout" onClick={() => logout()} >Logout</button>
    </div>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <h1 className="title">Waking the Cards</h1>
      </div>

      <div className="navigation">
        <Link to="/database" className="nav-items">
          <h1 className="nav-link">Card Database</h1>
        </Link>
        <Link to="/creator" className="nav-items">
          <h1 className="nav-link">Card Creator</h1>
        </Link>
        <Link to="/about" className="nav-items">
          <h1 className="nav-link">About This App</h1>
        </Link>
      </div>
      <div>
        <audio src={yugi} autoPlay loop />
      </div>
      <div>
        <img className="yugi-muto" src={yugimuto} alt="" />
        <img className="seto-kaiba" src={setokaiba} alt="" />
      </div>
    </>
  );
}

export default Landingpage;
