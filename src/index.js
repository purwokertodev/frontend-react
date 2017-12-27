import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon } from 'antd';
import { InputText } from '../src/components/input-text';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <Form layout="horizontal">
        <InputText
          id="username"
          label="Username"
          placeholder="Input Username"
          onChange={this.handleChange}
          value={this.state.name}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        />
        <InputText
          id="address"
          label="Address"
          mode="textarea"
          placeholder="Input Address"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        />
        <InputText
          id="searchUsername"
          placeholder="Search Username"
          mode="search"
          onSearch={e => console.log(e)}
          enterButton={false}
          defaultValue={this.state.name}
        />
      </Form>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));