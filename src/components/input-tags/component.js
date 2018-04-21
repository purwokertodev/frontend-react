import React from 'react';
import PropTypes from 'prop-types';
import { Form, Tag, Icon, Input, Tooltip } from 'antd';

export const InputTags = ({
  id,
  className,
  colon,
  color,
  error,
  inputVisible,
  label,
  labelCol,
  onBlur,
  onChange,
  onFocus,
  onHandleClose,
  onPressEnter,
  onTagClick,
  placeholder,
  refs,
  required,
  size,
  success,
  tags,
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
      <div className={className}>
        {tags.map((tag) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable color={color} afterClose={onHandleClose}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          <Input
            id={id}
            ref={refs}
            placeholder={placeholder}
            size={size}
            style={{ width: 78 }}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onPressEnter={onPressEnter}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={onTagClick}
            style={{ background: '#fff', borderStyle: 'dashed' }}
          >
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    </Form.Item>
  );
};

InputTags.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  colon: PropTypes.bool,
  color: PropTypes.string,
  error: PropTypes.string,
  inputVisible: PropTypes.bool,
  label: PropTypes.string,
  labelCol: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onHandleClose: PropTypes.func,
  onPressEnter: PropTypes.func,
  onTagClick: PropTypes.func,
  placeholder: PropTypes.string,
  refs: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  tags: PropTypes.array.isRequired,
  value: PropTypes.string,
  wrapperCol: PropTypes.object,
};

InputTags.defaultProps = {
  id: '',
  className: '',
  colon: false,
  color: '',
  error: '',
  inputVisible: false,
  label: '',
  labelCol: {},
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onHandleClose: () => {},
  onPressEnter: () => {},
  onTagClick: () => {},
  placeholder: '',
  refs: () => {},
  required: false,
  size: 'small',
  success: '',
  tags: [],
  value: null,
  wrapperCol: {},
};

export default {
  InputTags,
};
