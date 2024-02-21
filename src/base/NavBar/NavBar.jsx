import React from "react";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import { ReactComponent as SignOut } from "./SignOut.svg"; 
import { ReactComponent as CowBoy } from "./CowBoy.svg"; 
import { ReactComponent as Bonfire } from "./Bonfire.svg"; 

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
    console.log("Logging out..."); 
    navigate('/');
}; 

return (
    <div className="navBarMainWrapper">
        <div className="navBarBigwrapper">
            <CowBoy style={{ fill: "#88C558", width: "70px", height: "70px", marginTop: "0.75%"}}/>
            CYBER CAMP
            <Bonfire style={{ fill: "#88C558", width: "70px", height: "70px", Color: "red", marginTop: "0.75%"}}/>
        </div>
        <SignOut className="signOutButtonWrapper" onClick={handleLogout} style={{ fill: "#88C558", width: "60px", height: "60px", cursor: "pointer", marginTop: "0.75%" }} aria-label="Sign out" />
    </div>
    );
};
export default NavBar;
