import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import BottomCropsPage from './bottom_crops'; // assuming bottom_crops.js exists
// import './App.css'; // assuming you have your CSS file for styling

const crops = [
    { name: 'Wheat', yield: 500 },
    { name: 'Rice', yield: 650 },
    { name: 'Fruits', yield: 720 },
    { name: 'Soybean', yield: 420 },
    { name: 'Vegetables', yield: 820 },
];

function Analysis() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Crop Data</h1>
            </header>
            {/* <div className="App-body">
                <div className="chart-container">
                    <h2>Crop Yield (in tons per hectare)</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            data={crops}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="yield" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="button-container">
                    <button onClick={() => { }}>
                        Next
                    </button>
                </div>
            </div> */}
        </div>
    );
}

export default Analysis;
