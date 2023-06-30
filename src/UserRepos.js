import React, { Component } from "react";
import UserRepo from './UserRepo';

class UserRepos extends Component {
  render() {
    return (
    <>
    <h3>User Repositories</h3>
    <div>
    {this.props.userRepos.map((repo) => (<UserRepo key={repo.id} repo={repo} />
            ))
            }
    </div>
    </>
    )
  }
}

export default UserRepos;