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
    client_id: 'ab0d77f59862027a6f4a',
    client_secret: '9be580c3d61d0f200572245a3426e97fc1709918'
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