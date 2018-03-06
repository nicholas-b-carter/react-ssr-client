import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMessage } from '../actions'
import requireAuth from '../components/hoc/requireAuth'

class AdminsList extends Component {
  componentDidMount() {
    !this.props.auth.message ? this.props.fetchMessage() : null
  }

  renderAdmins() {
    return <h3>{this.props.auth.message}</h3>
  }

  render() {
    return(
      <div>
        <h4>Here's a super secret from the server.</h4>
        {this.renderAdmins()}
      </div>
    )
  }
}

function mapStateToProps({auth}) {
  return {auth}
}

export default {
  component: connect(mapStateToProps, {fetchMessage})(
    requireAuth(AdminsList)
  ),
  loadData: ({ dispatch }) => dispatch(fetchMessage())
}
