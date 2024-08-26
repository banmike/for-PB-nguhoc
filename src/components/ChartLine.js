import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Function to generate random values
const randomValue = (max) => Math.floor(Math.random() * max);

const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const LineChart = () => {
    const data = {
        labels: hours,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: Array(24).fill().map(() => randomValue(101)), // Random values between 0 and 100
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Humidity (%)',
                data: Array(24).fill().map(() => randomValue(101)), // Random values between 0 and 100
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Light (Lux)',
                data: Array(24).fill().map(() => randomValue(1001)), // Random values between 0 and 1000
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 1000,
                ticks: {
                    stepSize: 100,
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
