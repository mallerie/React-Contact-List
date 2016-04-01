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
    <li key={user.id} onClick={onSelect.bind(null, user)}>
      {user.name}</li>
    )}
  

  render() {

    let { users } = this.props;
    return (
      <ul>
      {users.map(::this.getUser)}
      </ul>
      )
  }

}








