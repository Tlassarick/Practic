import React from 'react';

function Card({ data}) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>{data.name}</h3>
      <p>Position: {data.position}</p>
    </div>
  );
}

export default Card;