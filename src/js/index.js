// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import UserDetails from './user_details';
import UserList from './user_list';
import users from './user_data';
import FormView from './form_view';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import cookie from 'js-cookie';
import Main from './main';



render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={UserList}/>
      <Route path="/add-contact" component={FormView}/>
      <Route path="/contact-details/:user_name" component={UserDetails}/>
    </Route>       
  </Router>
), document.querySelector('.app'));













