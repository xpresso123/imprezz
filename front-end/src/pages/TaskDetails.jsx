import React, { useState } from 'react';

const TaskDetails = () => {
  // Sample leaderboard data
  const leaderboard = [
    { name: 'Alice', xp: 300 },
    { name: 'Bob', xp: 250 },
    { name: 'Charlie', xp: 200 },
    { name: 'David', xp: 180 },
  ];

  const [formData, setFormData] = useState({
    subscribed: false,
    screenshot: null,
  });

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, subscribed: e.target.checked });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, screenshot: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Submission successful!');
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-gray-900 via-black to-gray-800 text-white p-10">
      <div className="flex gap-8">
        {/* Left Section: Task Leaderboard */}
        <div className="flex flex-col w-2/5 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Task Leaderboard</h3>
          <div className="max-h-64 overflow-y-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-2">S.No</th>
                  <th>Name</th>
                  <th>XP</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-2">{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.xp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Task Info and Submission Form */}
        <div className="flex-1 space-y-6">
          {/* Task Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-md">
            <h2 className="text-3xl font-semibold">Subscribe to Community YouTube Channel</h2>
            <p className="mt-4 text-gray-300">
              To complete this task, subscribe to our official YouTube channel: 
              <a 
                href="https://youtube.com/communitychannel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lime-300 underline ml-1"
              >
                Community YouTube Channel
              </a>.
            </p>
            <p className="mt-2 text-gray-300">
              After subscribing, submit a screenshot as proof to earn 100 XP.
            </p>
          </div>

          {/* Submission Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Submit Your Proof</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.subscribed}
                    onChange={handleCheckboxChange}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text ml-2">
                    I have subscribed to the YouTube channel.
                  </span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Screenshot</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
