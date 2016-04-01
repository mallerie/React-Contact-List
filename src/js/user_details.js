//Page with selected user displaying all their contact info.
import React, { Component, PropTypes } from 'react';
import { tempUser } from './user_data';
import { USER_SHAPE } from './shape'

export default class UserDetails extends Component {

 static propTypes = {
  tempUser: USER_SHAPE,
  goBack: PropTypes.func.isRequired
 }

  render() {
    let { goBack, tempUser } = this.props;
    return (
    <div className="user-details">
      <div className="avatar">
        <button onClick={goBack}></button>
        <img src={tempUser.photo} alt={tempUser.name}/>
        <ul>
          <li>{tempUser.name}</li>
          <li>{tempUser.email}</li>
          <li>{tempUser.phone}</li>
          <li>{tempUser.location}</li>
        </ul>
      </div>
    </div>
  )}
}
  


