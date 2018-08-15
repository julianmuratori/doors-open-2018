import React from 'react'
import TextField from 'material-ui/TextField'
import '../App.css'

const LoginForm = props =>  {
        return (
            <div className="container">
                <form className="login__container">
                    <p>Enter your details to login</p>
                    <TextField
                        hintText="Enter Your Username"
                        floatingLabelText="Username"
                        name="username"
                        onChange={props.handleChange}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Password"
                        floatingLabelText="Password"
                        name="password"
                        onChange={props.handleChange}
                    />
                    <br />
                    <button type="submit" className="button button__login"><h3>Sign In</h3></button>
                    <p>Need to Register? <a href="#" onClick={props.changeForm}>Click here</a></p>
                </form>
            </div>
        );
}

export default LoginForm