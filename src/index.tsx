import React from 'react';

import { HelloWorld } from './HelloWorld/HelloWorld';
import { MTV } from './MTV/MTV';
import { IDCard } from './IDCard/IDCard';

import './index.scss';

export default {
  HelloWorld,
  IDCard,
  MTV,
} as Record<string, React.FC>;
