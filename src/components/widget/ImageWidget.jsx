import React from 'react';

const ImageWidget = () => {
  return (<div style={{ padding: '1rem', border: '1px solid lightgrey', borderRadius: '8px' }}>
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    <img src="https://via.placeholder.com/200x80" alt='Placeholder Image Widget'/>
  </div>);
};

export default ImageWidget;