import React, { ChangeEvent, useState } from 'react';

import useInterval from './useInterval.js';
import useTimeout from './useTimeout.js';

export default function Component() {
  const [count, setCount] = useState(10);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count - 1);
  }, delay);

  const [visible, setVisible] = useState(false);

  useTimeout(() => {
    setDelay(null);
    setVisible(true);
  }, 10000);

  return (
    <>
      <h1>{count}</h1>
      {visible && <p>Hurra It's a boy</p>}
    </>
  );
}
