import React, { Component } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import users from './user_data';
import { hashHistory } from 'react-router';

export default class FormView extends Component {
  constructor(props) {
    super(props); 
      this.state = { 
        preview: './images/add-user.png'
      } 
  }

  dataHandler (data) {
    users.push(data);
    hashHistory.push('/');
  }

  dropHandler ([file]) {
    let { preview } = file;

    this.setState({preview: file.preview});
  }

  render() {
    let { file } = this.state;
    
    return (
      <div className="form-view">
        <h3>New Contact</h3>
        <div className="form-wrapper">
          <SimpleSerialForm onData={::this.dataHandler}>
            <div className="form-item">
              <input type="text" name="name" placeholder="Full Name"/>
            </div>

            <div className="form-item">
              <input type="email" name="email" placeholder="Email"/>
            </div>

            <div className="form-item">
              <input type="tel" name="phone" placeholder="Telephone"/>
            </div>

            <div className="form-item">
              <input type="text" name="location" placeholder="City & State"/>
            </div>
            <div className="drop">
              <Dropzone className="drop-zone" onDrop={::this.dropHandler}>
                Drop Photo Here 
                <img src={this.state.preview}/>
                <input type="hidden" name="photo" value={this.state.preview}/> 
              </Dropzone>
            </div>
          <button>Add Contact</button>
          </SimpleSerialForm>
        </div>  
      </div>
      )
  }


}