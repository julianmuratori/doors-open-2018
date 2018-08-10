import React,{ Component } from 'react'
import Typography from '@material-ui/core/Typography'
// import RaisedButton from 'material-ui/RaisedButton'

import Card from 'material-ui/Card'
// import Typography from 'material-ui/styles/typography'
import TextField from 'material-ui/TextField'
import '../App.css'

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
      const userpass = this.state
      e.preventDefault();
      console.log(userpass)
  }
  
  render() {

    return (
      <div className="container">
        <form className="login__container">
          <p>Enter your details to login</p>
          <TextField
            hintText="Enter Your Username"
            floatingLabelText="Username"
            name="username"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            hintText="Enter Your Password"
            floatingLabelText="Password"
            name="password"
            onChange={this.handleChange}
          />
          <br/>
            <button type="submit" className="button">Sign In</button>
        </form>
        </div>
    );
  }
}

export default Login