import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Form, Icon } from 'antd';
import {
  InputText,
  InputTextArea,
  InputSearch,
} from '../src/components/input-text';
import { InputNumbers } from '../src/components/input-number';
import { InputSelect } from '../src/components/input-select';
import { InputTags } from '../src/components/input-tags';
import { InputDate, InputDateRange } from '../src/components/input-date';
import { setTarget } from '../src/helpers/constants';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        address: '',
        hobbies: '1',
        tvChannel: [],
        tags: [],
        dateOfBirth: null,
        startDate: null,
        endDate: null,
        rangePicker: null,
        weight: 0.0,
        number: 0,
        price: 1000,
      },
      error: {
        name: '',
        address: '',
        hobbies: '',
        tvChannel: 'Harus Diisi',
        dateOfBirth: '',
      },
      name: '',
      tagValue: '',
      inputVisible: false,
      openCalendar: false,
      hobbies: [
        { id: '1', value: 'Membaca Buku/Novel' },
        { id: '2', value: 'Mendengarkan Lagu' },
        { id: '3', value: 'Bermain Games' },
        { id: '4', value: 'Lainnya' },
      ],
      tvChannel: [
        { id: '1', value: 'Super Sentai Series' },
        { id: '2', value: 'Kamen Rider Series' },
        { id: '3', value: 'Tom & Jerry' },
        { id: '4', value: 'Naruto Shippuden' },
        { id: '5', value: 'Laptop Si Unyil' },
        { id: '6', value: 'Upin - Ipin' },
      ],
    };

    this.onChange = this.onChange.bind(this);
    this.onCreateTags = this.onCreateTags.bind(this);
    this.onRemoveTags = this.onRemoveTags.bind(this);
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
  onCreateTags() {
    const inputValue = this.state.tagValue;
    let tags = this.state.form.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      form: Object.assign(this.state.form, {
        tags,
      }),
      tagValue: '',
      inputVisible: false,
    });
  }
  onRemoveTags(value) {
    const tags = this.state.form.tags.filter(tag => tag !== value);
    this.setState({
      form: Object.assign(this.state.form, {
        tags,
      }),
    });
  }
  render() {
    return (
      <Form layout="horizontal">
        <InputText
          id="name"
          name="name"
          label="Name"
          placeholder="Input Name"
          onChange={e => this.onChange(e, 'form')}
          value={this.state.form.name}
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
          label="Hobbies"
          childrens={this.state.hobbies}
          onChange={e => this.onChange(setTarget('hobbies', e), 'form')}
          value={this.state.form.hobbies}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        />
        <InputSelect
          id="tvChannel"
          label="Favorite TV Channel"
          mode="multiple"
          placeholder="Select your favorite TV channel's"
          childrens={this.state.tvChannel}
          onChange={e => this.onChange(setTarget('tvChannel', e), 'form')}
          value={this.state.form.tvChannel}
          error={this.state.error.tvChannel}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        />
        <InputTags
          refs={inputag => this.inputag = inputag}
          id="favoriteFood"
          label="Favorite Food"
          color="geekblue"
          inputVisible={this.state.inputVisible}
          tags={this.state.form.tags}
          onChange={e => this.setState({ tagValue: e.target.value })}
          onBlur={this.onCreateTags}
          onPressEnter={this.onCreateTags}
          onHandleClose={this.onRemoveTags}
          onTagClick={() => {
            this.setState({ inputVisible: true }, () => this.inputag.focus());
          }}
          value={this.state.tagValue}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        />
        <InputDate
          label="Date of Birth"
          placeholder="Select date"
          value={this.state.form.dateOfBirth}
          onChange={(date) => {
            this.onChange(setTarget('dateOfBirth', date), 'form');
          }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        />
        <InputDate
          label="Start Date"
          placeholder="Select start date"
          value={this.state.form.startDate}
          onChange={(date) => {
            this.onChange(setTarget('startDate', date), 'form');
          }}
          onOpenChange={(value) => {
            if (!value) {
              this.setState({ openCalendar: true });
            }
          }}
          disabledDate={(startValue) => {
            const endValue = this.state.form.endDate;
            if (!startValue || !endValue) {
              return false;
            }
            return startValue.valueOf() > endValue.valueOf();
          }}
          showTime
          format="DD MMM YYYY HH:mm:ss"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        />
        <InputDate
          label="End Date"
          placeholder="Select end date"
          value={this.state.form.endDate}
          onChange={(date) => {
            this.onChange(setTarget('endDate', date), 'form');
          }}
          onOpenChange={(value) => {
            this.setState({ openCalendar: value });
          }}
          disabledDate={(endValue) => {
            const startValue = this.state.form.startDate;
            if (!endValue || !startValue) {
              return false;
            }
            return endValue.valueOf() <= startValue.valueOf();
          }}
          properties={{
            open: this.state.openCalendar,
          }}
          showTime
          format="DD MMM YYYY HH:mm:ss"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        />
        <InputDateRange
          label="Range Picker"
          placeholder={['Start Time', 'End Time']}
          value={this.state.form.rangePicker}
          onChange={(date) => {
            this.onChange(setTarget('rangePicker', date), 'form');
          }}
          format="DD MMM YYYY"
          ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        />
        <InputNumbers
          id="weight"
          name="weight"
          label="Weight"
          defaultValue={this.state.form.weight}
          properties={{
            min: 0,
            max: 10,
            step: 0.1,
          }}
          onChange={value => console.log(value)}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        />
        <InputNumbers
          id="number"
          name="number"
          label="Number"
          defaultValue={this.state.form.number}
          properties={{
            min: 0,
            max: 10,
          }}
          onChange={value => console.log(value)}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        />
        <InputNumbers
          id="price"
          name="price"
          label="Price"
          defaultValue={this.state.form.price}
          properties={{
            formatter: value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: value => value.replace(/\$\s?|(,*)/g, ''),
          }}
          onChange={value => console.log(value)}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
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
