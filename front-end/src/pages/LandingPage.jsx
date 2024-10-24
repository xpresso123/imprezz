import React from 'react'
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-gray-900 via-black to-gray-800 text-white p-8">

      <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        <div className="max-w-lg text-center lg:text-left space-y-6">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-indigo-500">
            Empower Communities with the Power of TON Blockchain
          </h1>
          <p className="text-lg text-gray-300">
            Leverage the power of decentralized communities on the <b>TON ecosystem</b>.  
            Build, grow, and engage your community effortlessly while unlocking new ways of  
            collaboration through token rewards and transparent governance.
          </p>
          <div className="space-x-4">
            <button className="btn btn-primary">Explore Communities</button>
            <button className="btn btn-outline">Create a Community</button>
          </div>
        </div>
 

      </div>

      <div className="mt-20 space-y-12">
        <h2 className="text-4xl font-bold text-center text-lime-300">Why Build with Us?</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-2">Decentralized Ownership</h3>
            <p className="text-gray-300">
              With the TON blockchain, every user has a say. Communities thrive with transparent  
              voting mechanisms and decentralized governance models, ensuring fairness and equity.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-2">Tokenized Rewards</h3>
            <p className="text-gray-300">
              Reward active members with tokens and XP for participation. Motivate your community  
              with incentives that drive meaningful engagement and long-term loyalty.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-2">Seamless Collaboration</h3>
            <p className="text-gray-300">
              Use tasks, challenges, and leaderboards to gamify collaboration. Empower your  
              community to achieve common goals with transparency and accountability.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-12">
        <h2 className="text-4xl font-bold text-center text-indigo-500">Core Features</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4">Community Governance</h3>
            <p className="text-gray-300">
              Enable voting and governance models to ensure every community member's voice is heard.  
              Let the community shape its future with full transparency.
            </p>
          </div>
          <div className="flex-1 bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4">Secure & Scalable</h3>
            <p className="text-gray-300">
              Build on TON’s scalable blockchain infrastructure, ensuring your community thrives  
              without compromising on security or performance.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-indigo-500">
          Start Building with Us Today!
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Whether you want to create your first community or grow an existing one, our DApp  
          on TON will help you unlock new opportunities and reach new heights.
        </p>
        <Link to='/'><button className="btn btn-primary">Get Started</button></Link>
        
      </div>
    </div>
  );
};

export default LandingPage;
