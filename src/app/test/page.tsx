import React from 'react';

const Test: React.FC = () => {
  return (
    <div style={{ height: '2000px', padding: '20px' }}>
      <h1>Sticky Test</h1>
      
      <div style={{
        position: 'sticky',
        top: '20px',
        backgroundColor: 'lightblue',
        padding: '10px',
      }}>
        This text should stick to the top
      </div>

      <p style={{ marginTop: '50px' }}>
        Scroll down to see the sticky effect.
        This is just some extra content to make the page scrollable.
      </p>
    </div>
  );
};

export default Test;