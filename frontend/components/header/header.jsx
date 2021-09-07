import React from "react"
import { Link } from "react-router-dom"
import LoginFormContainer from "../session_form/login_form_container"


const Header = ({loggedStatus, logout}) => {
    if (loggedStatus) {//if a user is logged in, present a nav bar with log out
        
        return(
            <div>
                
                <h1>If some1 logged in</h1>
                <button onClick={logout}>Log Out</button>
            </div>
        )
    }
    else {
        return(
            <div>
                <h1>If user not logged in</h1>
                <LoginFormContainer/>
            </div>
        )
    }

}

export default Header;