import React from 'react';

import { ClickCounter } from './ClickCounter/ClickCounter';

import './index.scss';

export default {
  'click-counter': ClickCounter,
} as Record<string, React.FC>;
