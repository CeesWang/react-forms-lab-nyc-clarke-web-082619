import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateState = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (!(this.state.username === "" || this.state.password === ""))
      this.props.handleLogin(this.state);
 
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={this.updateState} id="username" name="username" required="true" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.updateState} id="password" name="password" required="true" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
