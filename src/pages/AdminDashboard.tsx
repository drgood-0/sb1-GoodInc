import React from 'react';
import { useForm } from 'react-hook-form';
import { PlusCircle, Users, BarChart2 } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send this data to your backend
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add Candidate</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="party" className="block mb-2">Party</label>
              <input
                type="text"
                id="party"
                {...register('party', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="position" className="block mb-2">Position</label>
              <select
                id="position"
                {...register('position', { required: true })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="presidential">Presidential</option>
                <option value="parliamentary">Parliamentary</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <PlusCircle className="inline-block mr-2" />
              Add Candidate
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Users className="text-blue-500 mr-2" />
              <span>Total Registered Voters: 1,000,000</span>
            </div>
            <div className="flex items-center">
              <BarChart2 className="text-green-500 mr-2" />
              <span>Votes Counted: 750,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;