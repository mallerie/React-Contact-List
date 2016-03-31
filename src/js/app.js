import React, { Component } from 'react';
import Truncated from './trunc_contact';

function showContactList(name) {
  return  (
      <Truncated contact={name}/>

    );
}

const contacts = [
  {
    first: 'Fred',
    last: 'Jones',
    email: 'freddyj@yahoo.com',
    city: 'Atlanta'
  },
  {
    first: 'Candace',
    last: 'Sweeney',
    email: 'golden12345@msn.com',
    city: 'Seattle'
  },
  {
    first: 'Chris',
    last: 'Johnson',
    email: 'chris.johns565@aol.com',
    city: 'Nashville'
  },
]

var appTitle = "Contact List";

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <div><h1>{appTitle}</h1></div>
        <div className="contacts-list">
          <ul>
            {contacts.map(showContactList)}
          </ul>
        </div>
      </div>
    );
  }

}














// const contacts = [
// {
//   firstName: "Fred",
//   lastName: "Allen",
//   email: "fred.allen,
//   city: ,
//   state:
// },


// ]