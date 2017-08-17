import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ReactDOM from 'react-dom';
import { scaleLinear, max, select } from 'd3';
import { Graph } from 'react-d3-graph';
import d3Chart from './d3Chart';
import OneMore from './oneMore';


// Graph payload (with minimalist structure) 
const data = {
  nodes: [
    {id: 'Harry', type: (<div>eheee</div>)},
    {id: 'Sally'},
    {id: 'Alice'}
  ],
  links: [
      {source: 'Harry', target: 'Sally'},
      {source: 'Harry', target: 'Alice'},
  ]
};

// The graph configuration 
const myConfig = {
  highlightBehavior: true,
  automaticRearrangeAfterDropNode: true,
  node: {
      color: 'lightgreen',
      size: 500,
      highlightStrokeColor: 'blue',
      type: 'diamond'
  },
  width: 800,
  link: {
      highlightColor: 'lightblue'
  }
};

// Graph event callbacks 
const onClickNode = function(nodeId) {
  // window.alert('Clicked node', nodeId);
};

const onMouseOverNode = function(nodeId) {
  // window.alert('Mouse over node', nodeId);
};

const onMouseOutNode = function(nodeId) {
  // window.alert('Mouse out node', nodeId);
};

const onClickLink = function(source, target) {
  // window.alert(`Clicked link between ${source} and ${target}`);
};

// style={{backgroundImage: 'url(http://i.giphy.com/5lF3pQpdquCBy.gif)'}}
export default class Graphy extends Component {
  render () {
    return (
      <div
        className='flex justify-center items-center h-100 tc-l bg-center cover bg-black'>
        <Paper>
          <Graph
            id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error 
            data={data}
            config={myConfig}
            onClickNode={onClickNode}
            onClickLink={onClickLink}
            onMouseOverNode={onMouseOverNode}
            onMouseOutNode={onMouseOutNode} />
        </Paper>
      </div>
    );
  }
}
