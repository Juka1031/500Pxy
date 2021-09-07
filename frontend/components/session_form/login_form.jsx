import React from 'react';
import {Link} from 'react-router-dom'
class LoginForm extends React.Component { 
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
        this.props.loginForm(this.state)
    }

    renderErrors(){
        
    }

    

    render(){
        return (
            <div className="login-container">
                <div className= "login-form">
                    <h3>Log in to 500Pxy</h3>
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
                        <label className = "email-password-label" >Password
                            <br/>
                            <input 
                                type="password"
                                value = {this.state.password}
                                onChange = {this.update('password')}
                                className = "email-password-input"
                            />
                        </label>
                        <br/>
                        <br/>
                        <br/>
                        <button className = "login-button" onClick={this.handleSubmit}>Log in</button>
                        <br/>
                        <br/>
                        <br/>
                        <button className="login-button">Demo user</button>
                        <br/>
                        <br/>
                        <br/>
                    </form>
                    <div>Don't have an account? <Link to="/signup">Sign up</Link></div>

                </div>
            </div>
        )
    };
};

export default LoginForm;