import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Election Results App</h1>
      <p className="text-xl mb-8">Stay informed about the latest Presidential and Parliamentary election results.</p>
      <div className="flex justify-center space-x-4">
        <Link to="/results" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          View Live Results <ChevronRight className="ml-2" />
        </Link>
        <Link to="/agent" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          Polling Station Agent Login <ChevronRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Home;