import axios from 'axios';
import React, { useState, useEffect } from 'react';

import useInterval from './services/useInterval.js';
import useTimeout from './services/useTimeout.js';

export default function Component() {
  const [count, setCount] = useState(5);
  const [delay, setDelay] = useState(1000); //10
  const [visible, setVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useInterval(() => {
    setCount(count - 1);
  }, delay);

  useTimeout(() => {
    setDelay(null);
    getData();
  }, 5000);

  const getData = () => {
    console.log('reading...');
    let url =
      'https://gender-reveals.s3.amazonaws.com/data/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211010%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211010T155423Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f6629ac618871e1d6a28cb23c02498e3874e1793e6c6033eb44f161407211639';
    axios.get(url).then((response) => {
      console.log('response: ', response.data);
    });
  };
  // const getDecryptedGender = (encryptedGender, inputPasscode) => {
  //   let gender = decryptedDES(encryptedGender, inputPasscode);
  //   let genderImage = getImage(gender);
  //   setGenderImage(genderImage);
  // };

  // For Testing purpose.
  const saveData = (form) => {
    console.log("In Save Data: ", form);
    let data = { gender: 'm', passcode: 'tanvi' };
    // let data = { gender: gender, passcode: passCode };
    let url = 'https://gender-reveals.s3.amazonaws.com/data/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211010%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211010T155502Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=de41201250367819b4f7ec44d3e3aa6690b53d938b7933bde8d82d06b8427b84'
    axios.put(url, data).then((response) => {
      console.log('response: ', response);
    });
  };

  return (
    <>
      <div className="reveal-container">
        {/* <img
          className="reveal-image"
          src="https://secrets-store.vercel.app/tadi_family.jpeg"
        /> */}

        <button onClick={() => saveData()}>Save Data</button> */}
        <h1>{count}</h1>
        {visible && <p>Hurrey It's a boy</p>}
        <button onClick={() => getData()}>Get Data</button>
      </div>
    </>
  );
}
