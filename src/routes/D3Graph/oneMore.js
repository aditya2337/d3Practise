
import React from 'react';

import { extent as d3ArrayExtent } from 'd3';
import {
    scaleLinear as d3ScaleLinear,
    scaleTime as d3ScaleTime,
} from 'd3';
import { line as d3Line } from 'd3';

type Props = {
    data: any,
    height: number,
    selectX: (datum: any) => any,
    selectY: (datum: any) => any,
    width: number,
};

export default ({
    data,
    height,
    selectX,
    selectY,
    width,
}: Props) => {
    // Since this is "time series" visualization, our x axis should have a time scale.
    // Our x domain will be the extent ([min, max]) of x values (Dates) in our data set.
    // Our x range will be from x=0 to x=width.
    const xScale = d3ScaleTime()
    .domain(d3ArrayExtent(data, selectX))
    .range([0, width]);
    
    // Our y axis should just have a linear scale.
    // Our y domain will be the extent of y values (numbers) in our data set.
    const yScale = d3ScaleLinear()
    .domain(d3ArrayExtent(data, selectY))
    .range([height, 0]);
    
    // These two functions select the scaled x and y values (respectively) of our data.
    const selectScaledX = datum => xScale(selectX(datum));
    const selectScaledY = datum => yScale(selectY(datum));
    
    // Create a d3Line factory for our scales.
    const sparkLine = d3Line()
    .x(selectScaledX)
    .y(selectScaledY);
    
    // Create a line path of for our data.
    const linePath = sparkLine(data);
    
    return (
        <svg
            className="container"
            height={height}
            width={width}>
            {/* ADD: our spark line as a path (inside a group, for convenient styling) */}
            <g className="line">
            <path d={linePath} />
            </g>
        </svg>
    )
};
