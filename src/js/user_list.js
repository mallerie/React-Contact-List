import React, { Component } from 'react';
import users from './user_data';
import Icon from './icon';
import cookie from 'js-cookie';
import { Link, hashHistory } from 'react-router';


export default class UserList extends Component {
    constructor(...args)  {
      
      super(...args);
      this.state = { users };
    }


    getUser(user) {
    return (  
    <li className="user-list-items" key={user.id}>
      <Link to={`/contact-details/${user.name}`}>
        <img className="list-view-images" 
          src={user.photo} 
          alt={user.name}/>
      </Link>
      {user.name}
      <button onClick={() => this.deleteUser(user)}>
        <Icon id="delete-button" type="minus-circle"/>
      </button>  
    </li>
    
    )}

    deleteUser(selectedUser) {
      var spliceUser = users.indexOf(selectedUser);
      var isConfirmed = window.confirm(`You are about to delete the user you selected, are you sure you want to do this?`);
    if (isConfirmed) {
      users.splice(spliceUser, 1);
      this.setState({users});
      hashHistory.push('/');   
    }
  }
  

  render() {
    let { users } = this.state;
    return (
      <div>  
        <ul>
        {users.map(::this.getUser)}
        </ul>
      </div>
      )
  }

}








