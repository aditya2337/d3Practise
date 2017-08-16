import React from 'react';
import Graph from './D3Graph';

const D3Graph = (props) => (
  <Graph data={[5, 10, 1, 3]} size={[500, 500]} {...props} />
);

export default D3Graph;
