import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const ClickCounter = ({ config, payload, onChange }) => {
    const [count, setCount] = useState(payload.count || 0);
    function onClick() {
        setCount(count + 1);
        onChange(count * 2);
    }
    return (jsxs(Fragment, { children: [jsxs("div", { className: "flo-clickCounter", onClick: onClick, children: [config.label || 'Count:', " ", jsx("br", {})] }), jsxs("div", { className: "flo-clickCounterDebug", children: ["Component State: ", count, " ", jsx("br", {}), "config.value: ", config.value, " ", jsx("br", {}), "Payload: ", JSON.stringify(payload)] })] }));
};

var index = {
    'click-counter': ClickCounter
};

export { index as default };
//# sourceMappingURL=index.es.js.map
