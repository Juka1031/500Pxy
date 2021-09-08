import React from 'react';
import {Link} from 'react-router-dom'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { WithRouter} from 'react-router'


class SignupForm extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            // avatarimage?
        };
        this.handleSubmit = this.handleSubmit.bind(this)

    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        //create a shallow copy with Object.assign?
        this.props.signupForm(this.state)
    
    }
    componentWillUnmount(){
        this.props.clearErrors();
    }
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error,idxKey) =>(
                    <li key={`${idxKey}`}>{error}</li>
                ))}
            </ul>
        )
    }
 
    

    render(){
        return (
            <div className= 'signup-container'>
                <div className= "signup-form">
                    <h3>Sign Up</h3>
                    <form>
                    <span className="error-messages">{this.renderErrors()}</span>
                        <label className = "email-password-label">Email
                            <br/>
                            <input 
                                type="text"
                                value = {this.state.email}
                                onChange = {this.update('email')}
                                className = "email-password-input"
                            />
                        </label>
                        <br/>
                        <br/>
                        <label className = "email-password-label">Password
                            <br/>
                            <input 
                                type="password"
                                placeholder = "(minimum 8 characters)"
                                value = {this.state.password}
                                onChange = {this.update('password')}
                                className = "email-password-input"
                            />
                        </label>
                        <br/>
                        <br/>
                        <br/>
                        <button className = "login-button" onClick={this.handleSubmit}>Sign up</button>
                        <br/>
                        <br/>
                        <br/>

                    </form>
                    <div>Already have an account? <Link to="/login">Login</Link></div>

                </div>
            </div>
        )
    };
};

export default SignupForm;