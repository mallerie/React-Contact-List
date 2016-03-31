import React, { Component } from 'react';
import contacts from './app'

export default class Truncated extends Component {

  render() {
    return (
          
      <li>{contacts[0].first.map(showContactList)}</li>
      
    );
  }

}

