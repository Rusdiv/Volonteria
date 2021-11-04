import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function ProfileSelect({
  defaultValue = '',
  className = '',
  values = [],
}) {
  return (
    <>
      <Select
        autoFocus={false}
        defaultOpen={false}
        defaultValue={defaultValue}
        className={className}
        onChange={handleChange}
      >
        {values.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </>
  );
}
