import React from 'react';

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
            <div className= "signup-form">
                <h1>Sign Up</h1>
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
                            placeholder = "(minimum 8 characters)"
                            value = {this.state.password}
                            onChange = {this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign up</button>
                </form>
                <div>Already have an account? <a>Log in</a></div>

            </div>
        )
    };
};

export default SignupForm;