import React from "react"
import { Link } from "react-router-dom"
// import Avatar from 'Images/avatar.PNG'


const Header = ({loggedStatus, logout}) => {


    if (loggedStatus) {//if a user is logged in, present a nav bar with log out
        
        return(
            
            <div>
                <div className="header-container">
                    <div className = "header-left-side">
                        <span ><a href="#/home"><img src={logo} className="Logo"/></a></span>
                        <div className = "logged-header-left-side"> 
                        <ul className="discover-drop">
                            <DiscoverDrop logout={logout} loggedStatus= {loggedStatus}>
                            </DiscoverDrop>
                            
                        </ul>
                        </div>

                        <span><a href="#">Licensing</a></span>
                        <span><a href="#">Portfolio</a></span>
                        <span><a href="#">Memberships</a></span>
                        <span><a href="#">Quests</a></span>
                        <span><a href="#">Blog</a></span>
                    </div>
                    <div className = "logged-header-right-side">
                    <ul className="avatar">
                        <ProfileDrop logout={logout} loggedStatus= {loggedStatus}>
                             {/* <ProfileDropItems logout={logout} loggedStatus= {loggedStatus}/> */}
                        </ProfileDrop>
                    </ul>
                        <button className="upload-button-header">
                            <a href="#/upload">
                            <img className ="up-arrow-2" src={up_arrow_2}/>
                            <span className="upload-text">Upload</span> </a></button>
                        {/* <button onClick={logout}><Link to="/">Logout</Link></button> */}

                    </div>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="header-container">
                <div className = "header-left-side">
                    <span ><a href="#"><img src={logo} className="Logo"/></a></span>
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

class ProfileDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
        this.handleClick = this.handleClick.bind(this);
    }


  
    handleClick(e) {

        e.preventDefault();
        this.setState({ active: !this.state.active });
        switch(e.currentTarget.className){
            case "drop-profile":
                return window.location.replace(`#/users/${this.props.loggedStatus.id}/images`)
            case "drop-galleries":
                return window.location.replace(`#/users/${this.props.loggedStatus.id}/galleries`)
            default:
        }

        
    }
  
    render() {
        const profileLink = `#/users/${this.props.loggedStatus.id}/images`
        if (!this.state.active)
            return (
                <>
                    <li>
                        <a href="#" onClick={this.handleClick}>
                            <img className="header-avatar" src= {avatar}/>
                        </a>
                    </li>
                    { this.state.active && this.props.children }
                </>
            )
        else 
            return(
                <>
                <li>
                    <a href="#" onClick={this.handleClick}>
                        <img className="header-avatar" src= {avatar}/>
                    </a>
                </li>
                <div className="profile-dropdown">
                <ul>
                    <li className="list-pointer"><a className = "drop-profile" onClick={this.handleClick}>Profile</a></li>
                    <li className="list-pointer"><a className = "drop-galleries" onClick={this.handleClick}>My Galleries</a></li>
                    {/* <li className="list-pointer"><a className = "drop-liked-photos" onClick={this.props.logout}>Liked Photos</a></li> */}
                    {/* <li className="list-pointer"><a className = "drop-settings" onClick={this.props.logout}>Settings</a></li> */}
                    <li className="list-pointer"><a className = "drop-logout" onClick={this.props.logout}>Logout</a></li>
                    </ul>  
                </div>
            </>
            )
                
    }
}


class DiscoverDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
        this.handleClick = this.handleClick.bind(this);
    }


  
    handleClick(e) {

        e.preventDefault();
        this.setState({ active: !this.state.active });
        switch(e.currentTarget.className){
            case "drop-profile":
                return window.location.replace(`#/home`)
            case "drop-galleries":
                return window.location.replace(`#/galleries`)
            case "drop-fresh":
                return window.location.replace(`#/fresh`)
            case "drop-popular":
                return window.location.replace(`#/popular`)
            default:
        }

        
    }
  
    render() {
        const profileLink = `#/users/${this.props.loggedStatus.id}/images`
        if (!this.state.active)
            return (
                <>
                    <li>
                        <a href="#" onClick={this.handleClick}>
                            <span className="splash-discover-text">Discover</span>
                        </a>
                    </li>
                    { this.state.active && this.props.children }
                </>
            )
        else 
            return(
                <>
                <li>
                    <a href="#" onClick={this.handleClick}>
                        <span className="splash-discover-text">Discover</span>
                    </a>
                </li>
                <div className="profile-dropdown">
                    <ul>
                        <li className="list-pointer"><a className = "drop-profile" onClick={this.handleClick}>Home</a></li>
                        <li className="list-pointer"><a className = "drop-popular" onClick={this.handleClick}>Popular</a></li>
                        <li className="list-pointer"><a className = "drop-fresh" onClick={this.handleClick}>Fresh Images</a></li>
                        <li className="list-pointer"><a className = "drop-galleries" onClick={this.handleClick}>Galleries</a></li>
                        {/* <li className="list-pointer"><a className = "drop-liked-photos" onClick={this.props.logout}>Liked Photos</a></li> */}
                    </ul>  
                </div>
            </>
            )
                
    }
}
  
// const ProfileDropItems = props => {
//     
//     return (
//         <div className="profile-dropdown">
//             <ul>
//                 <li><a className = "profile-items" href={profileLink}>Profile</a></li>
//                 <li><a className = "profile-items" onClick={props.logout}>Galleries</a></li>
//                 <li><a className = "profile-items" onClick={props.logout}>Liked Photos</a></li>
//                 <li><a className = "profile-items" onClick={props.logout}>Settings</a></li>
//                 <li><a className = "profile-items" onClick={props.logout}>Logout</a></li>
//             </ul>
            
//         </div>
//     )
// }
  


export default Header;


