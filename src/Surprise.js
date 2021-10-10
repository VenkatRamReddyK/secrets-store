import axios from 'axios';
import React, { useState, useEffect } from 'react';

import useInterval from './services/useInterval.js';
import useTimeout from './services/useTimeout.js';

export default function Component() {
  const [count, setCount] = useState(5);
  const [delay, setDelay] = useState(null); //10
  const [visible, setVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useInterval(() => {
    setCount(count - 1);
  }, delay);

  // useEffect(() => {
  //   revealGender();
  // }, []);

  // const revealGender = (gender) => {
  //   console.log('revealGender gender: ', gender);
  //   axios.get('./test.jpeg').then((response) => {
  //     console.log('response: ', response.data);
  //     setImageSrc(response.data);
  //     setVisible(true);
  //   });
  // };

  useTimeout(() => {
    setDelay(null);
    getData();
  }, 5000);

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
    let url =
      'https://gender-reveals.s3.amazonaws.com/data/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211010%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211010T155423Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f6629ac618871e1d6a28cb23c02498e3874e1793e6c6033eb44f161407211639';
    axios.get(url).then((response) => {
      console.log('response: ', response.data);
      // revealGender(response.data);
    });
  };
  // const getDecryptedGender = (encryptedGender, inputPasscode) => {
  //   let gender = decryptedDES(encryptedGender, inputPasscode);
  //   let genderImage = getImage(gender);
  //   setGenderImage(genderImage);
  // };

  // const getEncryptedGender = (gender, passcode) => {
  //   let encryptedGender = encryptDES(gender, passcode);
  //   let data = {
  //     passcode: encryptedGender,
  //   };
  //   saveData(data);
  // };

  // const saveData = (inputData) => {
  //   const headers = {
  //     'content-type': 'text/json;charset=utf-8',
  //     // 'Access-Control-Allow-Headers': '*',
  //     // 'Access-Control-Allow-Origin': '*',
  //   };
  //   let data = { gender: 'f', passcode: 'tanvi', name: 'goutam tadi' };
  //   const url =
  //     'https://gender-reveals.s3.amazonaws.com/data/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211003%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211003T005834Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=28abedb216ac5b96d4b37581d27c4b1f8e91c96291bd80c9c37c5a13838efecd';

  //   axios.put(url, data).then((response) => {
  //     console.log('response: ', response);
  //   });
  // };
  return (
    <>
      <div className="reveal-container">
        {/* <img
          className="reveal-image"
          src="https://secrets-store.vercel.app/tadi_family.jpeg"
        /> */}
      </div>
      {/* <button onClick={() => saveData()}>Save Data</button> */} */}
      <h1>{count}</h1>
      {visible && <p>Hurrey It's a boy</p>}
      <button onClick={() => getData()}>Get Data</button>
    </>
  );
}
