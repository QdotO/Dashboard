import React from 'react';
import Graph from './graph.png';

const GraphWidget = () => {
  return (
    <div style={{ border: '1px solid lightgrey' }}>
      GraphWidget
      <img src={Graph} alt="Graph Widget" />
    </div>
  )
}

export default GraphWidget;