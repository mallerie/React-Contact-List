// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import UserDetails from './user_details';
import UserList from './user_list';
import users from './user_data';
import FormView from './form_view';
import { Router, Route, hashHistory } from 'react-router';
import cookie from 'js-cookie';



render((
  <Router history={hashHistory}>
    <Route component={UserList} path="/"/>
    <Route component={UserDetails} path="/user-details"/>
    <Route component={FormView} path="/form-view"/>
  </Router>
), document.querySelector('.app'));












