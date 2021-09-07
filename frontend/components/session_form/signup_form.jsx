import React from 'react';
import {Link} from 'react-router-dom'

class SignupForm extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            // username: '',
            // firstName: '',
            // lastName: '',
            // username firstname and last name is input after the account is made
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

    

    render(){
        return (
            <div className= 'signup-container'>
                <div className= "signup-form">
                    <h3>Sign Up</h3>
                    <form>
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