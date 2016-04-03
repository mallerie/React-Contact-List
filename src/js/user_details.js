//Page with selected user displaying all their contact info.
import React, { Component, PropTypes } from 'react';
import USER_SHAPE from './shape';
import Icon from './icon';

export default class UserDetails extends Component {

 static propTypes = {
  user: USER_SHAPE,
  goBack: PropTypes.func.isRequired
 }

  render() {
    let { goBack, user } = this.props;
    return (
    <div className="user-details">
      <div className="avatar">
        <button onClick={goBack}><Icon type="arrow-left"/></button>
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


  


