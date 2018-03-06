import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'

const FormItem = Form.Item;

const StyledForm = styled(Form)`
  text-align: center;
  margin: auto;
  display: inline-block;
  width: 30%;
  height: 40vh;
`;

const ForgotLink = styled.a`
  float: right;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;

const LoginInput = styled(Input)`
  height: 25px;
  color: rgba(0,0,0,.25);
`;

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signInUser({email: values.userName, password: values.password})
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <LoginInput prefix={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <LoginInput prefix={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <ForgotLink className="login-form-forgot" href="">Forgot password</ForgotLink>
          <LoginButton type="primary" htmlType="submit" className="login-form-button">
            Log in
          </LoginButton>
          Or <a href="">register now!</a>
        </FormItem>
      </StyledForm>
    )
  }
}

export default Form.create()(NormalLoginForm)
