import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class FormView extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  dataHandler (formData) {
    let { onAdd } = this.props;
    this.props.onAdd(formData);
  }

  render() {
    return (
      <div className="form-view">
        <h3>Add Contact</h3>
        <SimpleSerialForm onData={::this.dataHandler}>
          <div>
          <label>
          Full Name
          <input type="text" name="name"/>
          </label>
        </div>
        <div>
          <label>
          Email
          <input type="email" name="email"/>
          </label>
        </div>
        <div>
          <label>
          Phone
          <input type="tel" name="phone"/>
          </label>
        </div>
        <div>
          <label>
          Location
          <input type="text" name="location"/>
          </label>
        </div>
        <div>
          <label>
          Photo URL
          <input type="url" name="photo"/>
          </label>
        </div>
        <button>Add Contact</button>
        </SimpleSerialForm>
      </div>
      )
  }


}