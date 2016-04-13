import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from './icon';

export default class Main extends Component {
  render() {
    return (
      <div>

        <div className="main-header">
          <h1>Contacts Keeper</h1>
        </div>

        <main className="main-content-w-aside">
            <nav>
              <Link to="/"><Icon type="home"/></Link>
              <Link to="/add-contact"><Icon type="user-plus"/></Link>
              <Link to="/about"><Icon type="file-text"/></Link>
              <Link to="/help"><Icon type="question"/></Link>
            </nav>

            <div className="children">
              {this.props.children}
            </div>
    
        </main>

        <footer>
          <h4>&reg; Contacts Keeper 2016 - A Mallerie Shirley company</h4>
        </footer>
      
      </div>
    )
  }
}