import React, {Component} from "react";
import './App.css';
import axios from 'axios'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'

class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    user:"YaroslavKazeyev",
    userData:[],
    userRepos:[]
  };
}

  componentDidMount() {
    this.getUserInfo();
    this.getUserRepos();
  }

  serviceParams = new URLSearchParams({
    client_id: 'x',
    client_secret: 'x'
  })
  
  getUserInfo = () => {
      // Make the API request using Axios
      axios.get(
      `http://api.github.com/users/${this.state.user}?${this.serviceParams}&sort=created`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        }
      }
    )
      .then(response => {
        this.setState({userData:response.data})
        console.log(response);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      })
  }

  getUserRepos = () => {
    // Make the API request using Axios
    axios.get(
      `http://api.github.com/users/${this.state.user}/repos?${this.serviceParams}&sort=created`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    }
  )
    .then(response => {
      this.setState({userRepos:response.data})
      console.log(response);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    })
}

  render() {
    return (
      <div>
      <UserInfo userData={this.state.userData}/>
      <UserRepos userRepos={this.state.userRepos}/>
      </div>
    )
  }
}
export default App;