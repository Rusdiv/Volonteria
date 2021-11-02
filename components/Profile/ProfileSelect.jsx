import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const days = [];

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
          <Option value={item}>{item}</Option>
        ))}
      </Select>
    </>
  );
}
