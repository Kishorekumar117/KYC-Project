import React, { useState } from 'react';

const YourComponent = () => {
  const [blink, setBlink] = useState(false);

  const handleClick1 = () => {
    setBlink(true);
    setTimeout(() => {
      setBlink(false);
    }, 10000); // Adjust blinking duration as needed
  };

  const handleClick2 = () => {
    setBlink(!blink); // Toggle blinking state
  };

  const buttonStyle = {
    marginRight: '10px',
    // Define other styles here
  };

  const blinkStyle = {
    animation: blink ? 'blink 1s linear infinite' : '',
    backgroundColor: blink ? 'red' : '', // Change background color when blinking
  };

  return (
    <div>
      <button onClick={handleClick1} style={buttonStyle}>
        Click 1
      </button>
      {/* <button onClick={handleClick2} style={blinkStyle}>
        Click 2
      </button> */}
      <style>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default YourComponent;
