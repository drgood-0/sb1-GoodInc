import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

const AgentDashboard: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send this data to your backend
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Polling Station Agent Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Submit Results</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="pollingStation" className="block mb-2">Polling Station</label>
            <input
              type="text"
              id="pollingStation"
              {...register('pollingStation', { required: true })}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="candidateName" className="block mb-2">Candidate Name</label>
            <input
              type="text"
              id="candidateName"
              {...register('candidateName', { required: true })}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="votes" className="block mb-2">Number of Votes</label>
            <input
              type="number"
              id="votes"
              {...register('votes', { required: true, min: 0 })}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            <Send className="inline-block mr-2" />
            Submit Results
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentDashboard;