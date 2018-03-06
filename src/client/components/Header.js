import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Icon, Row, Col, Affix } from 'antd'
import styled from 'styled-components'

const MenuRow = styled(Row)`
  background-color: black;
`;

const MenuLink = styled(Link)`
  color: white;
  font-size: 24px;
  font-size: 2vw;
  margin: 0;
`;

class Header extends Component {

  renderAuthButton = (authenticated) => {
    return (
      authenticated ? (
      <Link to="/users">{this.props.auth.user}</Link>
      ) : (
        <Link to="/signin">Sign In</Link>
      )
    )
  }

  render() {
    return (
      <Affix>
        <MenuRow type="flex" justify="space-around">
          <Col>
              <MenuLink to="/">Home</MenuLink>
          </Col>
          <Col>
              <MenuLink to="/about">About Us</MenuLink>
          </Col>
          <Col>
              <MenuLink to="/users">Users</MenuLink>
          </Col>
          <Col>
              <MenuLink to="/admins">Admins</MenuLink>
          </Col>
          <Col>
              <MenuLink to="/signin">Sign In</MenuLink>
          </Col>
        </MenuRow>
      </Affix>
    )
  }
}

function mapStateToProps({auth}) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
