import React, { Component } from 'react'
import { connect } from 'react-redux'
import RequireUnauth from '../components/hoc/requireUnauth'
import LoginForm from '../components/LoginForm'
import * as actions from '../actions'
import styled from 'styled-components'


const StyledDiv = styled.div`
  text-align: center;
  width: 100%;
`;

class SignInPage extends Component {
  render() {
    const { handleSubmit } = this.props

    return(
      <LoginForm signInUser={this.props.signinUser}/>
    )
  }
}

function mapStateToProps({auth}) {
  return { errorMessage: auth.error }
}

export default {
  component: connect(mapStateToProps, actions)(RequireUnauth(SignInPage))
}
