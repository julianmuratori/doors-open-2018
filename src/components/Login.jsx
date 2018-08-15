import React,{ Component } from 'react'
import '../App.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import axios from 'axios'

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    register: false
  };

  // Sets input fields to state

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Makes a post request to server

  newUser = e => {
      e.preventDefault();
      const { username, password, email } = this.state

      axios.post('/register', {
        username,
        email, 
        password
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res)
        }
      }).catch(err => {
        console.log(err)
      })
  }

  // Toggles the form between login and registration

  changeForm = e => {
    e.preventDefault()
    const { register } = this.state
    this.setState({ register: !register })
  }

  render() {
    const { register } = this.state

    return (
      <div className="container">
        {
          register ? (
            <RegisterForm 
              changeForm={this.changeForm}
              handleChange={this.handleChange}
              newUser={this.newUser}
              />
          ) : (
            <LoginForm 
              changeForm={this.changeForm}
              handleChange={this.handleChange}
              />
          ) 
        }
        
        </div>
    );
  }
}

export default Login