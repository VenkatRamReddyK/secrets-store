import axios from 'axios';
import React, { useState, useEffect } from 'react';

import useInterval from './services/useInterval.js';
import useTimeout from './services/useTimeout.js';

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
    // getData();
  }, 4000);

  const getData = () => {
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      changeOrigin: true,
    };
    console.log('reading...');
    console.log('saving...');
    // axios.defaults.headers.common['Authorization'] = 'Bearer token';
    axios.get('secrets.json').then((response) => {
      console.log('response: ', response);
    });
  };

  const saveData = () => {
    const headers = {
      'content-type': 'text/json;charset=utf-8',
      // 'Access-Control-Allow-Headers': '*',
      // 'Access-Control-Allow-Origin': '*',
    };
    let data = { name: 'Hello Keertrana' };
    axios
      .post('https://react-22mwmp.stackblitz.io/secrets.json', data, {
        headers,
      })
      .then((response) => {
        console.log('response: ', response);
      });
  };
  return (
    <>
      <button onClick={() => saveData()}>Save Data</button>
      <h1>{count}</h1>
      {visible && <p>Hurrey It's a boy</p>}
      <button onClick={() => getData()}>Get Data</button>
    </>
  );
}
