import React from 'react';

import { ClickCounter2 } from './ClickCounter copy/ClickCounter';
import { ClickCounter } from './ClickCounter/ClickCounter';

import './index.scss';

export default {
  'click-counter': ClickCounter,
  'click-counter-2': ClickCounter2,
} as Record<string, React.FC>;
