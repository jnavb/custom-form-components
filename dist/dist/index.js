(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react/jsx-runtime'), require('react')) :
  typeof define === 'function' && define.amd ? define(['react/jsx-runtime', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.flwCustomFormsComponents = factory(global.jsxRuntime, global.React));
})(this, (function (jsxRuntime, react) { 'use strict';

  const ClickCounter = ({ config, payload, onChange }) => {
      const [count, setCount] = react.useState(payload.count || 0);
      function onClick() {
          setCount(count + 1);
          onChange(count * 2);
      }
      return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: "flo-clickCounter", onClick: onClick, children: [config.label || 'Count:', " ", jsxRuntime.jsx("br", {})] }), jsxRuntime.jsxs("div", { className: "flo-clickCounterDebug", children: ["Component State: ", count, " ", jsxRuntime.jsx("br", {}), "config.value: ", config.value, " ", jsxRuntime.jsx("br", {}), "Payload: ", JSON.stringify(payload)] })] }));
  };

  var index = {
      'click-counter': ClickCounter
  };

  return index;

}));
//# sourceMappingURL=index.js.map
