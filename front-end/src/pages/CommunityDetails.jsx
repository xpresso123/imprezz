import React from 'react';

const CommunityDetails = () => {

    const leaderboard = [
    { name: 'Alice', xp: 1200 },
    { name: 'Bob', xp: 1100 },
    { name: 'Charlie', xp: 900 },
    { name: 'David', xp: 850 },
    { name: 'Eve', xp: 800 },
    { name: 'Frank', xp: 780 },
    { name: 'Grace', xp: 750 },
  ];

  const tasks = [
    { title: 'Complete Onboarding', description: 'Finish setting up your profile.', prize: 100 },
    { title: 'Post First Update', description: 'Share an update with the community.', prize: 200 },
    { title: 'Help a New Member', description: 'Assist new members.', prize: 150 },
    { title: 'Organize Event', description: 'Host a community event.', prize: 300 },
    { title: 'Promote Community', description: 'Invite others to join.', prize: 180 },
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-gray-900 via-black to-gray-800 text-white p-10">
      <div className="flex gap-8">
        {/* Left Section: Community Details & Leaderboard */}
        <div className="flex flex-col w-2/5 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Community Name</h2>
            <p className="text-lg text-gray-300">
              A brief description of the community, its purpose, and the type of members it welcomes.
            </p>
            <p className="font-semibold">
              Author: <span className="text-lime-200">John Doe</span>
            </p>
            <button className="btn btn-outline btn-accent w-full">Follow</button>
          </div>

          {/*Leaderboard */}
          <div className="mt-8">
            <h3 className="text-2xl text-lime-300 font-semibold mb-4">Leaderboard</h3>
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
        </div>

        {/*Task Cards */}
        <div className="flex-1 overflow-y-auto max-h-screen space-y-6 pr-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl text-lime-300 font-semibold">{task.title}</h3>
              <p className="mt-2 mb-4 text-gray-300">{task.description}</p>
              <p className="font-medium">
                Prize: <span className="text-lime-200">{task.prize} XP</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;
