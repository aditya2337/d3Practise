import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ReactDOM from 'react-dom';
import { scaleLinear, max, select } from 'd3';
import d3Chart from './d3Chart';

// style={{backgroundImage: 'url(http://i.giphy.com/5lF3pQpdquCBy.gif)'}}
export default class Graph extends Component {
  constructor (props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount () {
    this.createBarChart();
  }
  componentDidUpdate () {
    this.createBarChart();
  }
  createBarChart () {
    const node = this.node;
    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]]);
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d, i) => i * 25)
      .attr('y', d => {
        let x = this.props.size[1];
        let y = yScale(d);
        let z = x - y;
        return z;
      })
      .attr('height', d => yScale(d))
      .attr('width', 25);
  }

  render () {
    return (
      <div
        className='flex justify-center items-center h-100 tc-l bg-center cover bg-black'>
        <Paper>
          <svg ref={node => this.node = node}
            width={500} height={500} />
        </Paper>
      </div>
    );
  }
}
