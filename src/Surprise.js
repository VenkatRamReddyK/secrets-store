import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Cryptr = require('cryptr');
import useInterval from './services/useInterval.js';
import useTimeout from './services/useTimeout.js';

export default function Component() {
  const [count, setCount] = useState(3);
  const [delay, setDelay] = useState(null); //3
  const [visible, setVisible] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [gender, setGender] = useState(null);
  const [error, setError] = useState(null);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setDelay(null);
      // getData();      
    }

  }, delay);

  // useTimeout(() => {
  //   setDelay(null);
  //   getData();
  // }, 5000);

  const getData = () => {
    console.log('reading...');
    let url =
      'https://gender-reveals.s3.amazonaws.com/data/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211010%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211010T155423Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f6629ac618871e1d6a28cb23c02498e3874e1793e6c6033eb44f161407211639';
    axios.get(url).then((response) => {
      console.log('response: ', response.data);
      try {
        
      let cryptr = new Cryptr(passcode);
      // const encryptedPasscode = cryptr.encrypt(passcode);
      const decryptedPasscode = cryptr.decrypt(response.data.passcode);
      // console.log("Input encrypted passcode: ", encryptedPasscode);
      console.log("Ciper passcode: ", response.data.passcode);
      
      if(decryptedPasscode === passcode) {
        const decryptedString = cryptr.decrypt(response.data.gender);
        setGender(decryptedString);
        // const decryptedString = cryptr.decrypt(response.data.gender);
        setDelay(1000);        
      } else {
        setError("Invalid passcode");
      }
    }
    catch(error) {
      setError("Invalid passcode");
    };
    
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
      console.log('response: ', response.passcode);      
    });
  };
  const onChange = (input) => {
    setPasscode(input);
  }

  const submitPasscode = () => {
    getData();    
  }

  return (
    <>
      <div className="reveal-container">
        {/* <img
          className="reveal-image"
          src="https://secrets-store.vercel.app/tadi_family.jpeg"
        /> */}
        {!visible && (
          <>
            <p>Do you wan't to reveal the gender ? </p>
            <button onClick={() => setVisible(true)}>Reveal</button>
          </>
        )}

        {
          visible && (
            <>
              Please Enter Passcode <input type="text" onChange={(e) => onChange(e.target.value)} />
              <button onClick={() => submitPasscode()}>Submit</button>
            </>
          )}
        {/* <button onClick={() => saveData()}>Save Data</button> */} */}
        <h1>{count}</h1>
          {visible && !!gender && !error && !delay && (
            <p>Hurrey It's a {gender}</p>
          )}
          {error && (
            <p>
              {error}
            </p>
          )}
        {/* <button onClick={() => getData()}>Get Data</button> */}
      </div>
    </>
  );
}
