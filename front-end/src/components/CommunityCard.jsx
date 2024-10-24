import React from 'react';

const CommunityCard = ({ image, title, description, members }) => {
  return (
    <div className="glass bg-gradient-to-r from-slate-900 to-slate-700 border-[1px] border-slate-800  backdrop-opacity-95 backdrop-blur-xl max-w-sm p-3 shadow-xl rounded-lg">
      <img src={image} alt={title} className="rounded-lg mb-4 w-full h-[200px]" />
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-lime-300"><span className='text-gray-300'>Members:</span> {members}</p>
    </div>
  );
};

export default CommunityCard;
