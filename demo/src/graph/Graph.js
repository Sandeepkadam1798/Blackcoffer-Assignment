import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, LineController, LineElement, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import Filter from './Filter';

// Register the necessary components
Chart.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    ArcElement,
    Tooltip,
    Legend
);

const Graph = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const getColor = (value) => {
        if (value < 3) return '#FF4D4D';  // Red for low
        if (value < 6) return '#FFCC80';  // Orange for medium
        return '#66FF66';                  // Green for high
    };

    const pieChartData = {
        labels: ['Low Intensity', 'Medium Intensity', 'High Intensity'],
        datasets: [{
            data: [
                filteredData.filter(item => item.intensity < 3).length,
                filteredData.filter(item => item.intensity >= 3 && item.intensity < 6).length,
                filteredData.filter(item => item.intensity >= 6).length
            ],
            backgroundColor: ['#FF4D4D', '#FFCC80', '#66FF66'],
        }]
    };

    const lineChartData = {
        labels: filteredData.map(item => item.start_year),
        datasets: [
            {
                label: 'Intensity Over Time',
                data: filteredData.map(item => item.intensity),
                borderColor: '#FF4D4D',  // Red for low intensity
                backgroundColor: 'rgba(255, 77, 77, 0.2)',
                fill: true,
            },
            {
                label: 'Likelihood Over Time',
                data: filteredData.map(item => item.likelihood),
                borderColor: '#FFA500',  // Orange for medium likelihood
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                fill: true,
            },
            {
                label: 'Relevance Over Time',
                data: filteredData.map(item => item.relevance),
                borderColor: '#008000',  // Green for high relevance
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
                fill: true,
            }
        ]
    };

    const barChartData = {
        labels: filteredData.map(item => item.country),
        datasets: [
            {
                label: 'Intensity',
                data: filteredData.map(item => item.intensity),
                backgroundColor: filteredData.map(item => getColor(item.intensity)),
            },
            {
                label: 'Likelihood',
                data: filteredData.map(item => item.likelihood),
                backgroundColor: filteredData.map(item => getColor(item.likelihood)),
            },
            {
                label: 'Relevance',
                data: filteredData.map(item => item.relevance),
                backgroundColor: filteredData.map(item => getColor(item.relevance)),
            }
        ]
    };

    const mainGraphData = {
        labels: filteredData.map(item => item.country),
        datasets: [
            {
                label: 'Intensity',
                data: filteredData.map(item => item.intensity),
                backgroundColor: filteredData.map(item => getColor(item.intensity)),
            },
            {
                label: 'Likelihood',
                data: filteredData.map(item => item.likelihood),
                backgroundColor: filteredData.map(item => getColor(item.likelihood)),
            },
            {
                label: 'Relevance',
                data: filteredData.map(item => item.relevance),
                backgroundColor: filteredData.map(item => getColor(item.relevance)),
            }
        ]
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Data Visualization Dashboard</h1>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <Filter data={data} setFilteredData={setFilteredData} />
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <h2 className="text-2xl font-semibold mb-4">Main Graph: Intensity, Likelihood, and Relevance by Country</h2>
                        <Bar data={mainGraphData} />
                    </div>

                    <div className="col-span-1">
                        <h2 className="text-2xl font-semibold mb-4">Pie Chart: Intensity Distribution</h2>
                        <Pie data={pieChartData} />
                    </div>

                    <div className="col-span-1">
                        <h2 className="text-2xl font-semibold mb-4">Line Graph: Trends Over Time</h2>
                        <Line data={lineChartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Graph
