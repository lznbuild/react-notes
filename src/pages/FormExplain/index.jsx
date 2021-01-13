import React, { Component, Fragment } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

class FormExplain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.layout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 6
      }
    };

    this.validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!'
      },
      number: {
        range: '${label} must be between ${min} and ${max}'
      }
    };

    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.usernameRef.current.value, this.passwordRef.current.value, 'submitValue');
  };

  submitControl = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    console.log(username, password, 'submitControlValue');
  };

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onFinish = (values) => {
    console.log(values);
  };

  render() {
    const { username, password } = this.state;
    const { validateMessages, layout } = this;

    return (
      <Fragment>
        <h2>非受控组件</h2>
        <form onSubmit={this.submit}>
          <label htmlFor="username">username</label>
          <input type="text" name="username" ref={this.usernameRef} />

          <label htmlFor="password">password</label>
          <input type="password" name="password" ref={this.passwordRef} />
          <button type="submit">提交</button>
        </form>
        <h2>受控组件</h2>
        <form onSubmit={this.submitControl}>
          <label htmlFor="username">username</label>
          <input type="text" name="username" value={username} onChange={this.handleUsername} />
          <div>{username}</div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" value={password} onChange={this.handlePassword} />
          <div>{password}</div>
          <button type="submit">提交</button>
        </form>
        <h2>antd 封装后的表单</h2>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99
              }
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}

export default FormExplain;
