import React, { useState } from 'react';
import TextToImageConverter from './config/TextTexture';

const test = () => {
  // Step 2: Create a state variable to hold the text value
  const [text, setText] = useState('');
  const [img, setImg] = useState('');


  // Step 3: Define a function to handle the image data URL
  const handleImage = (dataUrl) => {
    // Perform any action with the data URL, e.g., send it to the server
    console.log('Received image data URL:', dataUrl);
    setImg(dataUrl)
   
  };

  return (
    <div>
      {/* Step 4: Use the TextToImageConverter component */}
      <TextToImageConverter text={text} handleImage={handleImage} />

      {/* Input field to enter text */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <img src={img} alt="" />
    </div>
  );
};

export default test;
