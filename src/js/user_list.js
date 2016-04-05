import React, {PropTypes, Component } from 'react';
import USER_SHAPE from './shape';
import users from './user_data';
import Icon from './icon';

// import tempUser from './index';


export default class UserList extends Component {
  
  static propTypes = {
    users: PropTypes.arrayOf(USER_SHAPE), 
    onSelect: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }

    getUser(user) {
      let { onSelect, onDelete } = this.props;
    
    return (  
    <li className="user-list-items" key={user.id}>
      <img className="list-view-images" 
           src={user.photo} 
           alt={user.name} 
           onClick={onSelect.bind(null, user)}/>
      {user.name}
      <button onClick={onDelete.bind(null, user)}>
        <Icon id="delete-button" type="trash-o"/>
      </button>  
    </li>
    
    )}
  

  render() {

    let { users, onAdd } = this.props;
    return (
      <div>
        <div className="contact-list-header-button">
          <h3>
            Contact List
          </h3>
          <button id="add-button" 
              onClick={onAdd}><Icon type="user-plus"/>
          </button>
        </div>  
          
        
      
      <ul>
      {users.map(::this.getUser)}
      </ul>
      </div>
      )
  }

}








