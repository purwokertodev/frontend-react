import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';

export const InputSelect = ({
  id,
  children,
  colon,
  defaultValue,
  error,
  filterOption,
  label,
  labelCol,
  mode,
  onBlur,
  onChange,
  onFocus,
  onSearch,
  placeholder,
  required,
  size,
  showSearch,
  success,
  value,
  wrapperCol,
}) => {
  let showValidationStatus = '';
  let showValidationMessage = '';
  let showOption = [];

  if (error) {
    showValidationStatus = 'error';
    showValidationMessage = error;
  }

  if (success) {
    showValidationStatus = 'success';
    showValidationMessage = success;
  }

  if (children.length > 0) {
    children.map(data => {
      return showOption.push(
        <Select.Option
          key={data.id}
          title={data.value}
          value={data.id}
        >
          {data.value}
        </Select.Option>
      );
    });
  }

  return (
    <Form.Item
      colon={colon}
      help={showValidationMessage}
      label={label}
      labelCol={labelCol}
      required={required}
      validateStatus={showValidationStatus}
      wrapperCol={wrapperCol}
    >
      <Select
        id={id}
        placeholder={placeholder}
        mode={mode}
        showSearch={showSearch}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onSearch={onSearch}
        defaultValue={defaultValue}
        value={value}
        size={size}
        filterOption={filterOption}
      >
        {showOption}
      </Select>
    </Form.Item>
  );
};

InputSelect.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  colon: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  error: PropTypes.string,
  filterOption: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  label: PropTypes.string,
  labelCol: PropTypes.object,
  mode: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.string,
  showSearch: PropTypes.bool,
  success: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  wrapperCol: PropTypes.object,
};

InputSelect.defaultProps = {
  id: '',
  children: [],
  colon: false,
  defaultValue: null,
  error: '',
  filterOption: true,
  label: '',
  labelCol: {},
  mode: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onSearch: () => {},
  placeholder: '',
  required: false,
  size: 'default',
  showSearch: false,
  success: '',
  value: null,
  wrapperCol: {},
};

export default {
  InputSelect,
};
