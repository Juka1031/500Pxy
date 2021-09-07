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
            <div className= "login-form">
                <h1>Login</h1>
                <form>
                    <label>Email
                        <input 
                            type="text"
                            value = {this.state.email}
                            onChange = {this.update('email')}
                        />
                    </label>
                    <label>Password
                        <input 
                            type="password"
                            value = {this.state.password}
                            onChange = {this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
                <div>Don't have an account? <Link to="/signup">Sign up</Link></div>

            </div>
        )
    };
};

export default LoginForm;