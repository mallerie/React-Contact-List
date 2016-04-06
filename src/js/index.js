// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './user_details';
import UserList from './user_list';
import users from './user_data';
import FormView from './form_view';


function deleteUser(selectedUser) {
  var spliceUser = users.indexOf(selectedUser);
  var isConfirmed = window.confirm(`You are about to delete the user you selected, are you sure you want to do this?`);
    if (isConfirmed) {
      users.splice(spliceUser, 1);
      renderUserList();    
    }
  
}

function renderUserList() {
  ReactDOM.render(

    <UserList users={users} 
              onSelect={renderUserDetails} 
              onAdd={renderFormView}
              onDelete={deleteUser}/>,
    document.querySelector('.app')

    )
  }


function renderUserDetails(user) {
ReactDOM.render(

  <UserDetails user={user} goBack={renderUserList}/>,
  document.querySelector('.app')

  )
}

function addUserAndRenderUserList(newItem) {
  users.push(newItem);
  renderUserList();
}

function renderFormView() {
ReactDOM.render(

  <FormView 
    onAdd={addUserAndRenderUserList}/>
  , document.querySelector('.app')
  )  
}


renderUserList();









