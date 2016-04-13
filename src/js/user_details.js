//Page with selected user displaying all their contact info.
import React, { Component } from 'react';
import Icon from './icon';
import { Link } from 'react-router';
import users from './user_data';

export default class UserDetails extends Component {

  render() {
    // console.log('user name:', this.prop.params.user_name);
    let { user_name } = this.props.params;
    let user = users.find(currentUser => currentUser.name === user_name);

    return (
    <div className="user-details">
      <div className="avatar">
        <img src={user.photo} alt={user.name}/>
      </div>  
        <ul>
          <li><Icon className="icons" type="user"/>{user.name}</li>
          <li><Icon className="icons" type="envelope"/>{user.email}</li>
          <li><Icon className="icons" type="mobile"/>{user.phone}</li>
          <li><Icon className="icons" type="globe"/>{user.location}</li>
        </ul>
    </div>
  )}
}


  


