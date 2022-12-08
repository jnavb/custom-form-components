import React, { useState } from 'react';

export const ClickCounter = (props: any) => {
  const { config, payload, onChange } = props;
  const [count, setCount] = React.useState(payload.count || 0);
  function onClick() {
    setCount(count + 1);
    onChange(count * 2);
  }
  console.log;
  return (
    <>
      <div className="flw-clickCounter" onClick={onClick}>
        {config.label || 'Count:'} <br />
      </div>
      <div className="flw-clickCounterDebug">
        Component State: {count} <br />
        config.value: {config.value} <br />
        Payload: {JSON.stringify(payload)}
      </div>
    </>
  );
};
