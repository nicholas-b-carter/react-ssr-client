import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      // Default = Object containing user info.
      switch(this.props.auth.authenticated) {
        case true:
          return <Redirect to="/" />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  function mapStateToProps({auth}) {
    return {auth}
  }

  return connect(mapStateToProps)(RequireAuth)
}
