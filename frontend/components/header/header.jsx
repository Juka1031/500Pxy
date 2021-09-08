import React from "react"
import { Link } from "react-router-dom"
import LoginFormContainer from "../session_form/login_form_container"
import Logo from 'Images/Logo.PNG'
import Logo2 from '../../../app/assets/images/Logo.PNG'

const Header = ({loggedStatus, logout}) => {


    // return (
    // <div>
        
    
    // </div>
    // )
    if (loggedStatus) {//if a user is logged in, present a nav bar with log out
        
        return(
            
            <div>
                
                <span ><a href="#"><img src={Logo2} className="Logo"/></a></span>
                <span><a href="#">Discover</a></span>
                <span><a href="#">Licensing</a></span>
                <span><a href="#">Portfolio</a></span>
                <span><a href="#">Memberships</a></span>
                <span><a href="#">Quests</a></span>
                <span><a href="#">Blog</a></span>
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
                    <span ><a href="#"><img src={Logo} className="Logo"/></a></span>
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