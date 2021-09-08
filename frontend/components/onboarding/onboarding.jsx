import React from 'react'

class Onboarding extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            email: props.currentUser.email,
            id: props.currentUser.id
            // avatarimage
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        //create a shallow copy with Object.assign?
        this.props.updateUser(this.state)
        
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
        return(
            <div className="onboarding-container">
                <div className= 'onboarding-form'>
                    <h3>Welcome to 500px.<br/>Let’s get to know you a little.</h3>
                    <form>
                        <span className="onboard-errors"></span>
                        <label className = "email-password-label">First Name

                        <br/>
                        <input 
                            type="text"
                            value = {this.state.firstName}
                            onChange={this.update('firstName')}
                            className = "email-password-input"
                        />
                        </label>
                        <br/>
                        <br/>
                        <label className = "email-password-label">Last Name

                            <br/>
                            <input
                                type="text" 
                                value={this.state.lastName}
                                onChange= {this.update('lastName')}
                                className = "email-password-input"
                            />
                        </label>
                        <br/>
                        <br/>
                        <label className = "email-password-label">Username

                            <br/>
                            <input
                                type="text" 
                                value={this.state.username}
                                onChange= {this.update('username')}
                                className = "email-password-input"
                            />
                        </label>
                        <br/>
                        <br/>
                        <br/>
                        <button className = "login-button" onClick={this.handleSubmit}>Next</button>
                        <br/>
                        <br/>
                        <br/>
                    </form>
                </div>
            </div>
        )
    }

}

export default Onboarding