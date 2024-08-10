import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const MapComponent = () => {
  const divRef = useRef(null);

  const captureScreenshot = () => {
    if (divRef.current) {
      html2canvas(divRef.current).then((canvas) => {
        // Create an image element and set the src to the canvas data URL
        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/png');

        // Create a link element to download the image
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'screenshot.png';
        link.click();
      });
    }
  };

  return (
    <div>
      <div ref={divRef} style={{ padding: '20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>
        <h1>Capture This Div</h1>
        <p>This content will be captured in the screenshot.</p>
      </div>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
    </div>
  );
};

export default MapComponent;
