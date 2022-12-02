import { useState } from 'react';

export const ClickCounter = ({ config, payload, onChange }: any) => {
  const [count, setCount] = useState(payload.count || 0);
  function onClick() {
    setCount(count + 1);
    onChange(count * 2);
  }
  return (
    <>
      <div className="flo-clickCounter" onClick={onClick}>
        {config.label || 'Count:'} <br />
      </div>
      <div className="flo-clickCounterDebug">
        Component State: {count} <br />
        config.value: {config.value} <br />
        Payload: {JSON.stringify(payload)}
      </div>
    </>
  );
};
