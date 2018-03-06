import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
  componentDidMount() {
    this.props.employees.length ? null : this.props.fetchEmployees()
  }

  renderEmployees() {
    return this.props.employees.map(emp => {
      return <li key={emp.id}>{emp.name}</li>
    })
  }

  head() {
    return (
      <Helmet>
        <title>{`(${this.props.employees.length}) Employees Loaded`}</title>
        <meta property="og:title" content="Employees App" />
      </Helmet>
    )
  }

  render() {
    return(
      <div>
        {this.head()}
        Here's a big list of employees.
        <ul>
          {this.renderEmployees()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({employees}) {
  return {employees}
}

export default {
  component: connect(mapStateToProps, {fetchEmployees})(UsersList),
  loadData: ({ dispatch }) => dispatch(fetchEmployees())
}
