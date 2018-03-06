import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'antd'
import * as actions from '../actions'

const renderField = ({
  input,
  label,
  type,
  meta: {touched, error, warning}
}) => (
  <fieldset className='form-group'>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched &&
      ((error && <span className="alert-danger">{error}</span>) ||
        (warning && <span>{warning}</span>))
    }
  </fieldset>
)

class SignInPage extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({email, password})
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="email" component={renderField} type="text" label="Email"/>
          <Field name="password" component={renderField} type="password" label="Password"/>
        {this.renderAlert()}
        <Button action="submit">
          Sign In
        </Button>
      </form>
    )
  }
}

function mapStateToProps({auth}) {
  return { errorMessage: auth.error }
}

export default {
  component: connect(mapStateToProps, actions)(reduxForm({form: 'signin'})(SignInPage))
}
