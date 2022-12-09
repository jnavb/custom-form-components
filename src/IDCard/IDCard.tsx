import React from 'react';
import { FormComponentProps } from 'src/formTypes';

export const IDCard = (props: FormComponentProps) => {
  const { config, payload, onChange } = props;

  return (
    <div>
      <span>Please introduce your ID Card</span>
      <div style={{ display: 'flex' }}>
        <input
          style={{ border: '1px solid grey', marginRight: '6px' }}
          placeholder="Letter"
          value={config.value}
          onChange={onChange}
        />
        <input
          style={{ border: '1px solid grey' }}
          placeholder="9-Digits"
          value={config.value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
