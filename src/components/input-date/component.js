import React from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const InputDate = ({
  colon,
  defaultValue,
  disabled,
  disabledDate,
  error,
  format,
  label,
  labelCol,
  onChange,
  onOpenChange,
  placeholder,
  properties,
  required,
  showTime,
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
      <DatePicker
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onOpenChange={onOpenChange}
        disabled={disabled}
        disabledDate={disabledDate}
        size={size}
        showTime={showTime}
        format={format}
        {...properties}
      />
    </Form.Item>
  );
};

InputDate.propTypes = {
  colon: PropTypes.bool,
  defaultValue: PropTypes.object,
  disabled: PropTypes.bool,
  disabledDate: PropTypes.func,
  error: PropTypes.string,
  format: PropTypes.string,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  onChange: PropTypes.func,
  onOpenChange: PropTypes.func,
  placeholder: PropTypes.string,
  properties: PropTypes.object,
  required: PropTypes.bool,
  showTime: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  size: PropTypes.string,
  success: PropTypes.string,
  value: PropTypes.object,
  wrapperCol: PropTypes.object,
};

InputDate.defaultProps = {
  colon: false,
  defaultValue: null,
  disabled: false,
  disabledDate: () => {},
  error: '',
  format: 'DD/MMM/YYYY',
  label: '',
  labelCol: {},
  onChange: () => {},
  onOpenChange: () => {},
  placeholder: '',
  properties: {},
  required: false,
  showTime: false,
  size: 'default',
  success: '',
  value: null,
  wrapperCol: {},
};

export const InputDateRange = ({
  colon,
  defaultValue,
  disabled,
  disabledDate,
  error,
  format,
  label,
  labelCol,
  onChange,
  onOpenChange,
  placeholder,
  properties,
  ranges,
  required,
  showTime,
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
      <RangePicker
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onOpenChange={onOpenChange}
        disabled={disabled}
        disabledDate={disabledDate}
        size={size}
        showTime={showTime}
        format={format}
        ranges={ranges}
        {...properties}
      />
    </Form.Item>
  );
};

InputDateRange.propTypes = {
  colon: PropTypes.bool,
  defaultValue: PropTypes.array,
  disabled: PropTypes.bool,
  disabledDate: PropTypes.func,
  error: PropTypes.string,
  format: PropTypes.string,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  onChange: PropTypes.func,
  onOpenChange: PropTypes.func,
  placeholder: PropTypes.array,
  properties: PropTypes.object,
  ranges: PropTypes.any,
  required: PropTypes.bool,
  showTime: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  size: PropTypes.string,
  success: PropTypes.string,
  value: PropTypes.array,
  wrapperCol: PropTypes.object,
};

InputDateRange.defaultProps = {
  colon: false,
  defaultValue: [],
  disabled: false,
  disabledDate: () => {},
  error: '',
  format: 'DD/MMM/YYYY',
  label: '',
  labelCol: {},
  onChange: () => {},
  onOpenChange: () => {},
  placeholder: [],
  properties: {},
  ranges: null,
  required: false,
  showTime: false,
  size: 'default',
  success: '',
  value: [],
  wrapperCol: {},
};

export default {
  InputDate,
  InputDateRange,
};
