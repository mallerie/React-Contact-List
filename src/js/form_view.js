import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class FormView extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props); 
      this.state = { 
        preview: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png'
      }
    
  }

  dataHandler (formData) {
    let { onAdd } = this.props;
    this.props.onAdd(formData);
  }

  dropHandler ([file]) {
    let { preview } = file;

    this.setState({preview});
  }

  render() {
    let { file } = this.state;
    
    return (
      <div className="form-view">
        <h3>Add Contact</h3>
        <SimpleSerialForm onData={::this.dataHandler}>
          <div className="form-item">
            <label>
            Full Name
            <input type="text" name="name"/>
            </label>
          </div>
          <div className="form-item">
            <label>
            Email
            <input type="email" name="email"/>
            </label>
          </div>
          <div className="form-item">
            <label>
            Phone
            <input type="tel" name="phone"/>
            </label>
          </div>
          <div className="form-item">
            <label>
            Location
            <input type="text" name="location"/>
            </label>
          </div>
          <div>
          <Dropzone onDrop={::this.dropHandler}>
            Drop Photo Here 
            <img src={this.state.preview}/>
            <input type="hidden" name="photo" value={this.state.preview}/> 
          </Dropzone>
        </div>
        <button>Add Contact</button>
        </SimpleSerialForm>
      </div>
      )
  }


}