// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './user_details';

const tempUser = {
      name: 'Fred Jones',
      email: 'freddyj@yahoo.com',
      phone: '404-333-2673',
      location: 'Atlanta, GA',
      photo: 'http://pngimg.com/upload/face_PNG5660.png',
      id: 5
    }

function clicked() {
  alert('clicked')
}

ReactDOM.render(

  <UserDetails tempUser={tempUser} goBack={clicked}/>,
  document.querySelector('.app')

  )

