import React from 'react';
import { ComponentProps } from '../types/componentProps.d.ts';

export const IDCard = (props: ComponentProps) => {
  const { config, payload, onChange } = props;

  return <div>
    <span>Please introduce your ID Card</span>
    <input placeholder="Letter" value={config.value} onChange={onChange} />
    <input placeholder="9-Digits" value={config.value} onChange={onChange} />
  </div>;
};
