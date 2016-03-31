// Javascript Entry Point

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import $ from 'jquery';

function renderApp() {

  ReactDOM.render(
    <App/>,
    document.querySelector(".app")
  );
}

// function renderPage(cat) {  
//   ReactDOM.render(
//     <Page onSelect={renderApp} octo={cat}/>,
//     document.querySelector(".app")
//   )
// }

renderApp();


 // onSelect={renderPage}
 //paste line 25 back to line 10 after App if needed