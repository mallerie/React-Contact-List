// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './user_details';
import UserList from './user_list';
import users from './user_data';



function renderUserList() {
  ReactDOM.render(

    <UserList users={users} onSelect={renderUserDetails}/>,
    document.querySelector('.app')

    )

  }



function renderUserDetails(user) {
ReactDOM.render(

  <UserDetails user={user} goBack={renderUserList}/>,
  document.querySelector('.app')

  )
}

renderUserList();







