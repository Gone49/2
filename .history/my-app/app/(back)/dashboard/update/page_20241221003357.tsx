import React, { useState } from 'react';

const CheckForUpdates = () => {
  const [currentVersion] = useState('1.0.0'); // Hardcoded current version, can be dynamic
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [updateStatus, setUpdateStatus] = useState('');

  // Simulate fetching the latest version
  const fetchLatestVersion = async () => {
    // Here, you would usually make an API call to check for the latest version.
    // For now, we simulate it with a delay.
    setUpdateStatus('Checking for updates...');

    setTimeout(() => {
      const fetchedVersion = '1.1.0'; // Simulating a fetched version
      setLatestVersion(fetchedVersion);

      if (fetchedVersion !== currentVersion) {
        setUpdateStatus('Update available!'); 
      } else {
        setUpdateStatus('You are on the latest version!');
      }
    }, 2000); // Simulating delay
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Check for Software Updates</h1>

      <div className="text-center">
        <p className="text-lg font-medium text-gray-700 mb-4">Current Version: {currentVersion}</p>
        {latestVersion && (
          <p className="text-lg font-medium text-gray-700 mb-4">Latest Version: {latestVersion}</p>
        )}

        <button
          onClick={fetchLatestVersion}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Check for Updates
        </button>

        <p className="mt-4 text-xl font-semibold text-gray-600">{updateStatus}</p>
      </div>
    </div>
  );
};

export default CheckForUpdates;
