import React, { Component } from "react";

class UserRepo extends Component {
  render() {
    return (
        <div style= {container}>         
          <p>Name: <span>{this.props.repo.name}</span></p>
          <p>Description: <span>{this.props.repo.description}</span></p>
        </div>
    )
  }
}

const container = {
  padding: '2px',
}

export default UserRepo;