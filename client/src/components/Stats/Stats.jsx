import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Stats = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            // text: "Your sleep pattern"
        },
        axisY: {
            title: "Sleep Duration",
            suffix: "hrs",
            interval: 1
        },
        axisX: {
            title: "Day of Month",
            prefix: "D",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Day {x}: {y}hrs",
            dataPoints: [
                { x: 1, y: 6.6 },
                { x: 2, y: 7.0 },
                { x: 3, y: 5.6 },
                { x: 4, y: 5 },
                { x: 5, y: 8 },
                { x: 6, y: 7 },
                { x: 7, y: 6.6 },
                { x: 8, y: 5 },
                { x: 9, y: 6 },
                { x: 10, y: 7 }
            ]
        }]
    }

    return (
        <div>
            <h1 className='text-5xl text-center mt-6 mb-6'>Your Sleep pattern</h1>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    )
}

export default Stats;