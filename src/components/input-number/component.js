import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputNumber } from 'antd';

export const InputNumbers = ({
  id,
  name,
  colon,
  defaultValue,
  disabled,
  error,
  label,
  labelCol,
  onChange,
  placeholder,
  properties,
  required,
  size,
  success,
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
      <InputNumber
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
        size={size}
        {...properties}
      />
    </Form.Item>
  );
};

InputNumbers.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colon: PropTypes.bool,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  properties: PropTypes.object,
  required: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  wrapperCol: PropTypes.object,
};

InputNumbers.defaultProps = {
  id: '',
  name: '',
  colon: false,
  defaultValue: 0,
  disabled: false,
  error: '',
  label: '',
  labelCol: {},
  onChange: () => {},
  placeholder: '',
  properties: {},
  required: false,
  size: 'default',
  success: '',
  wrapperCol: {},
};

export default {
  InputNumbers,
};
