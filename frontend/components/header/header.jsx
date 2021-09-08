import React from "react"
import { Link } from "react-router-dom"
import LoginFormContainer from "../session_form/login_form_container"


const Header = ({loggedStatus, logout}) => {


    // return (
    // <div>
        

    // </div>
    // )
    if (loggedStatus) {//if a user is logged in, present a nav bar with log out
        
        return(
            <div>
                <a href="#">Pxy</a>
                <a href="#">Discover &#812;</a>
                <a href="#">Licensing</a>
                <a href="#">Portfolio</a>
                <a href="#">Memberships</a>
                <a href="#">Quests</a>
                <a href="#">Blog</a>
                <a href="#">Profile picture button</a>
                <a href="#">Airplane</a>
                <a href="#">Notification</a>
                <a href="#">Upload</a>
                <h1>If some1 logged in</h1>
                <button onClick={logout}><Link to="/">Logout</Link></button>
            </div>
        )
    }
    else {
        return(
            <div className="header-container">
                <div className = "header-left-side">
                    <span><a href="#">Pxy</a></span>
                    <span><a href="#">Discover</a></span>
                    <span><a href="#">Licensing</a></span>
                    <span><a href="#">Resources</a></span>
                    <span><a href="#">Memberships</a></span>
                    <span><a href="#">Quests</a></span>
                    <span><a href="#">Blog</a></span>
                </div>
                <div className = "header-right-side">
                    
                   <span><Link to="/login">Log in</Link></span>
                   <button className="header-login-button"><Link to="/signup">Sign up</Link></button>
                </div>
            </div>
        )
    }

}

export default Header;