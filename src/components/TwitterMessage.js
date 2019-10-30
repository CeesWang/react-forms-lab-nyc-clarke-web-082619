import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      remainingChars: 0
    };
  }

  handleMessage = (event) => {
    let remainingChars = this.props.maxChars - event.target.value.split("").length; 
    if (remainingChars >= 0)
      this.setState({message: event.target.value, remainingChars: remainingChars});
  }

  render() {
    console.log(this.state.message);
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessage}type="text" name="message" id="message" value={this.state.message}/>
        <p> {this.state.remainingChars}/{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
