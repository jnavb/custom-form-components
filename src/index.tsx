import React from 'react';

import { HelloWorld } from './HelloWorld/HelloWorld.tsx';
import { MTV } from './MTV/MTV.tsx';
import { IDCard } from './IDCard/IDCard.tsx';

import './index.scss';

export default {
  'HelloWorld': HelloWorld,
  'IDCard': IDCard,
  'MTV': MTV,
} as Record<string, React.FC>;
