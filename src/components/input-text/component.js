import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

export const InputText = ({
  id,
  name,
  colon,
  defaultValue,
  disabled,
  error,
  label,
  labelCol,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
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

  if (error) {
    showValidationStatus = 'error';
    showValidationMessage = error;
  }

  if (success) {
    showValidationStatus = 'success';
    showValidationMessage = success;
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
    </Form.Item>
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colon: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
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
  colon: false,
  defaultValue: '',
  disabled: false,
  error: '',
  label: '',
  labelCol: {},
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  placeholder: '',
  prefix: '',
  required: false,
  size: 'default',
  success: '',
  value: '',
  wrapperCol: {},
};

export const InputTextArea = ({
  id,
  name,
  autosize,
  colon,
  defaultValue,
  disabled,
  error,
  label,
  labelCol,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  required,
  success,
  value,
  wrapperCol,
}) => {
  let showValidationStatus = '';
  let showValidationMessage = '';

  if (error) {
    showValidationStatus = 'error';
    showValidationMessage = error;
  }

  if (success) {
    showValidationStatus = 'success';
    showValidationMessage = success;
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
    </Form.Item>
  );
};

InputTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autosize: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  colon: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  success: PropTypes.string,
  value: PropTypes.string,
  wrapperCol: PropTypes.object,
};

InputTextArea.defaultProps = {
  id: '',
  name: '',
  autosize: { minRows: 2, maxRows: 6 },
  colon: false,
  defaultValue: '',
  disabled: false,
  error: '',
  label: '',
  labelCol: {},
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  placeholder: '',
  required: false,
  success: '',
  value: '',
  wrapperCol: {},
};

export const InputSearch = ({
  id,
  name,
  colon,
  defaultValue,
  enterButton,
  error,
  label,
  labelCol,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onSearch,
  placeholder,
  required,
  size,
  success,
  value,
  wrapperCol,
}) => {
  let showValidationStatus = '';
  let showValidationMessage = '';

  if (error) {
    showValidationStatus = 'error';
    showValidationMessage = error;
  }

  if (success) {
    showValidationStatus = 'success';
    showValidationMessage = success;
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
      <Input.Search
        id={id}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onSearch={onSearch}
        defaultValue={defaultValue}
        value={value}
        size={size}
        enterButton={enterButton}
      />
    </Form.Item>
  );
};

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colon: PropTypes.bool,
  defaultValue: PropTypes.string,
  enterButton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
  ]),
  error: PropTypes.string,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  value: PropTypes.string,
  wrapperCol: PropTypes.object,
};

InputSearch.defaultProps = {
  id: '',
  name: '',
  colon: false,
  defaultValue: '',
  enterButton: false,
  error: '',
  label: '',
  labelCol: {},
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onSearch: () => {},
  placeholder: '',
  required: false,
  size: 'default',
  success: '',
  value: '',
  wrapperCol: {},
};

export default {
  InputText,
  InputTextArea,
  InputSearch,
};
