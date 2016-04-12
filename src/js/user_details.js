//Page with selected user displaying all their contact info.
import React, { Component } from 'react';
import Icon from './icon';
import { Link } from 'react-router';
import user from './user_data';

export default class UserDetails extends Component {

  render() {
    return (
    <div className="user-details">
      <div className="avatar">
        <Link to="/"><Icon type="arrow-left"/></Link>
        <img src={user[0].photo} alt={user[0].name}/>
      </div>  
        <ul>
          <li><Icon className="icons" type="user"/>{user[0].name}</li>
          <li><Icon className="icons" type="envelope"/>{user[0].email}</li>
          <li><Icon className="icons" type="mobile"/>{user[0].phone}</li>
          <li><Icon className="icons" type="globe"/>{user[0].location}</li>
        </ul>
    </div>
  )}
}


  


