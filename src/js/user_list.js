import React, {PropTypes, Component } from 'react';
import USER_SHAPE from './shape';
import users from './user_data';

// import tempUser from './index';


  function clicked() {
  alert('clicked')
}

export default class UserList extends Component {
  
  static propTypes = {
    users: PropTypes.arrayOf(USER_SHAPE), 
    onSelect: PropTypes.func.isRequired
  }

    getUser(user) {
      let { onSelect } = this.props;

    return (
    <li className="user-list-items" key={user.id} onClick={onSelect.bind(null, user)}>
      <img className="list-view-images" src={user.photo} alt={user.name}/>{user.name}</li>
    )}
  

  render() {

    let { users } = this.props;
    return (
      <div>
      <h3>Contact List</h3>
      <ul>
      {users.map(::this.getUser)}
      </ul>
      </div>
      )
  }

}








