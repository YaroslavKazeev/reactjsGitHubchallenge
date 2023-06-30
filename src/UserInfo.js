import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
      <div style={container}>
        <img src={this.props.userData.avatar_url} alt="GitHub User Avatar"></img>
        <div>
          <p>Login: <span>{this.props.userData.login}</span></p>
          <p>Username: <span>{this.props.userData.name}</span></p>
          <p>Location: <span>{this.props.userData.location}</span></p>
          <p>Email: <span>{this.props.userData.email}</span></p>
        </div>
      </div>
    )
  }
}

const container = {
    display: 'flex',
    // justifyContent: 'spaceBetween',
    gap: '20px',
    border: 'none',
    padding: '20px 20px',
}

export default UserInfo;