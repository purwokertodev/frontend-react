import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

export const InputText = ({
  id,
  name,
  autosize,
  colon,
  defaultValue,
  disabled,
  enterButton,
  error,
  label,
  labelCol,
  mode,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onSearch,
  placeholder,
  prefix,
  required,
  size,
  success,
  value,
  wrapperCol,
}) => {
  let showValidationStatus = '';
  let showValidationMessage = '';
  let showModeInputText = '';

  if (error) {
    showValidationStatus = 'error';
    showValidationMessage = error;
  }

  if (success) {
    showValidationStatus = 'success';
    showValidationMessage = success;
  }

  switch (mode) {
    case 'text':
      showModeInputText = (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
          size={size}
          prefix={prefix}
        />
      );
      break;
    case 'search':
      showModeInputText = (
        <Input.Search
          id={id}
          name={name}
          placeholder={placeholder}
          onSearch={onSearch}
          defaultValue={defaultValue}
          size={size}
          enterButton={enterButton}
        />
      );
      break;
    case 'textarea':
      showModeInputText = (
        <Input.TextArea
          id={id}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          disabled={disabled}
          defaultValue={defaultValue}
          autosize={autosize}
        />
      );
      break;
    default:
      break;
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
      {showModeInputText}
    </Form.Item>
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autosize: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  colon: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  enterButton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
  ]),
  error: PropTypes.string,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  mode: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  required: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  value: PropTypes.string,
  wrapperCol: PropTypes.object,
};

InputText.defaultProps = {
  id: '',
  name: '',
  autosize:{ minRows: 2, maxRows: 6 },
  colon: false,
  defaultValue: '',
  disabled: false,
  enterButton: false,
  error: '',
  label: '',
  labelCol: {},
  mode: 'text',
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onSearch: () => {},
  placeholder: '',
  prefix: '',
  required: false,
  size: 'default',
  success: '',
  value: '',
  wrapperCol: {},
};

export default {
  InputText,
};
