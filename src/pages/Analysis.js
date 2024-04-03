import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const cropNames = [
  'Wheat',
  'Rice',
  'Corn',
  'Barley',
  'Soybeans',
  'Potatoes',
  'Tomatoes',
  'Apples',
  'Oranges',
  'Bananas',
]; // Array of crop names

export default function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Crop Production',
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
      },
    ],
  });

  // Function to generate random data and colors
  const generateRandomData = (type) => {
    const numSlices = Math.floor(Math.random() * cropNames.length) + 1; // 1 to all crops
    const randomCropIndices = new Set(); // Ensures unique crops

    while (randomCropIndices.size < numSlices) {
      randomCropIndices.add(Math.floor(Math.random() * cropNames.length)); // Random indices
    }

    const labels = [];
    const data = [];
    const colors = [];
    const hoverColors = [];

    for (const index of randomCropIndices) {
      labels.push(cropNames[index]);
      if (type === 'data') {
        data.push(Math.floor(Math.random() * 100) + 10); // 10 to 100 value range
      } else {
        data.push(chartData.datasets[0].data[index] || 0); // Maintain existing data
      }
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      colors.push(`rgb(${red}, ${green}, ${blue})`);
      hoverColors.push(`rgba(${red}, ${green}, ${blue}, 0.8)`);
    }

    setChartData({
      labels,
      datasets: [
        {
          label: 'Crop Production',
          data,
          backgroundColor: colors,
          hoverBackgroundColor: hoverColors,
        },
      ],
    });
  };

  useEffect(() => {
    generateRandomData(); // Generate data on initial render
  }, []);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: chartData,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData]); // Update chart when data changes

  return (
    <div>
      <button onClick={() => generateRandomData('data')}>Andhra Pradesh</button>
      <button onClick={() => generateRandomData('colors')}>Arunachal Pradesh</button>
      <button onClick={() => generateRandomData('labels')}>Assam</button>
      <button onClick={() => generateRandomData('data')}>Bihar</button>
      <button onClick={() => generateRandomData('colors')}>Chhattisgarh</button>
      <button onClick={() => generateRandomData('data')}>Jammu and Kashmir</button>
      <button onClick={() => generateRandomData('colors')}>Himachal Pradesh</button>
      <button onClick={() => generateRandomData('labels')}>Jharkhand</button>
      <button onClick={() => generateRandomData('labels')}>Karnataka</button>
      <button onClick={() => generateRandomData('data')}>Kerala</button>
      <button onClick={() => generateRandomData('colors')}>Madhya Pradesh</button>
      <button onClick={() => generateRandomData('labels')}>Maharashtra</button>
      <button onClick={() => generateRandomData('data')}>Manipur</button>
      <button onClick={() => generateRandomData('colors')}>Meghalaya Colors</button>
      <button onClick={() => generateRandomData('labels')}>Mizoram</button>
      <button onClick={() => generateRandomData('data')}>Nagalande Data</button>
      <button onClick={() => generateRandomData('colors')}>Odisha</button>
      <button onClick={() => generateRandomData('labels')}>Punjab</button>
      <button onClick={() => generateRandomData('data')}>Rajasthan</button>
      <button onClick={() => generateRandomData('colors')}>Sikkim</button>
      <button onClick={() => generateRandomData('labels')}>Tamil Nadu</button>
      <button onClick={() => generateRandomData('labels')}>Telangana</button>
      <button onClick={() => generateRandomData('labels')}>Tripura</button>
      <button onClick={() => generateRandomData('labels')}>Uttar Pradesh</button>
      <button onClick={() => generateRandomData('labels')}>Uttarakhand</button>
      <button onClick={() => generateRandomData('labels')}>West Bengal</button>
      
      <canvas ref={chartRef} style={{ width: '300px', height: '200px' }} />
    </div>
    
  );
  
}
