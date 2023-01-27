import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './MyChart.scss';

const MyChart = () => {
	const [testData, setTestData] = useState({
		labels: ['January', 'February', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Chart Test !',
				data: [40, 55, 75, 100, 120],
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				fill: false,
			},
		],
	});

	useEffect(() => {
		const createChart = (chartType, elementId, dataset) => {
			new Chart(document.getElementById(elementId), {
				type: chartType,
				data: dataset,
				options: {
					responsive: false,
					scales: {
						y: {
							type: 'linear',
							beginAtZero: true,
						},
					},
				},
			});
		};
		createChart('bar', 'bar-chart', testData);
		createChart('line', 'line-chart', testData);
		createChart('radar', 'radar-chart', testData);
	});

	return (
		<div className="mychart">
			<span>Chart.js 테스트 중입니다.</span>
			<div className="chart-box">
				<canvas id="bar-chart" />
				<canvas id="line-chart" />
				<canvas id="radar-chart" />
			</div>
		</div>
	);
};

export default MyChart;
