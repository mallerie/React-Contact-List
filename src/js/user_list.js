import React, { Component } from 'react';
import users from './user_data';
import Icon from './icon';
import cookie from 'js-cookie';
import { Link, hashHistory } from 'react-router';


export default class UserList extends Component {


    deleteUser(selectedUser) {
      var spliceUser = users.indexOf(selectedUser);
      var isConfirmed = window.confirm(`You are about to delete the user you selected, are you sure you want to do this?`);
    if (isConfirmed) {
      users.splice(spliceUser, 1);
      hashHistory.push('/');   
    }
  
}
    getUser(user) {
    return (  
    <li className="user-list-items" key={user.id}>
      <Link to="/user-details">
        <img className="list-view-images" 
          src={user.photo} 
          alt={user.name}/>
      </Link>
      {user.name}
      <button onClick={::this.deleteUser}>
        <Icon id="delete-button" type="minus-circle"/>
      </button>  
    </li>
    
    )}
  

  render() {
    return (
      <div>
        <div className="contact-list-header-button">
          <h3>
            Contact List
          </h3>
          <Link to="/form-view"><Icon type="user-plus"/></Link>
        </div>  
          
        <ul>
        {users.map(::this.getUser)}
        </ul>
      </div>
      )
  }

}








