
import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props)
        // debugger
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            // avatarimage
        };
    }


    render(){
        debugger
        let redirect
        if(this.props.currentUser.firstName === "" && this.props.currentUser.lastName === ""){
            redirect = true;
            // debugger
        }
        // debugger
        if(redirect){
            return(
                <div><Redirect to="/onboarding"/></div>
            )
        }else{
            return(
            <div>im a  home feed</div>
            )
        }
        

    }
}

export default Home;