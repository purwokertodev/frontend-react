import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon } from 'antd';
import {
  InputText,
  InputTextArea,
  InputSearch,
} from '../src/components/input-text';
import { InputSelect } from '../src/components/input-select';
import { setTarget } from '../src/helpers/constants';
import 'antd/dist/antd.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: '',
        address: '',
        hobbies: '1',
      },
      error: {
        username: '',
        address: '',
        hobbies: '',
      },
      name: '',
      hobbies: [
        {id: '1', value: 'Membaca Buku'},
        {id: '2', value: 'Mendengar Lagu'},
        {id: '3', value: 'Mendongeng'},
      ],
    };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e, element) {
    const {
      id,
      value,
    } = e.target;

    const elm = this.state[element];
    elm[id] = value;

    this.setState({ [element]: elm });

    if (value && element !== 'error') {
      this.onChange(setTarget(id, ''), 'error');
    }
  }
  render() {
    return (
      <Form layout="horizontal">
        <InputText
          id="username"
          name="username"
          label="Username"
          placeholder="Input Username"
          onChange={e => this.onChange(e, 'form')}
          value={this.state.form.username}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        />
        <InputTextArea
          id="address"
          name="address"
          label="Address"
          placeholder="Input Address"
          onChange={e => this.onChange(e, 'form')}
          value={this.state.form.address}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        />
        <InputSelect
          id="hobbies"
          name="hobbies"
          label="Hobbies"
          children={this.state.hobbies}
          onChange={(e) => {
            this.setState({
              form: Object.assign(this.state.form, {
                hobbies: e,
              })
            });
          }}
          value={this.state.form.hobbies}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        />
        <InputSearch
          id="searchUsername"
          name="searchUsername"
          placeholder="Search Username"
          onSearch={e => console.log(e)}
          enterButton
          defaultValue={this.state.name}
        />
      </Form>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));
