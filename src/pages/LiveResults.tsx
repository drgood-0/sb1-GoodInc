import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: 'Candidate A', votes: 120000 },
  { name: 'Candidate B', votes: 80000 },
  { name: 'Candidate C', votes: 60000 },
];

const LiveResults: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Live Election Results</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Presidential Race</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="votes" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LiveResults;