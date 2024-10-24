import React from "react";
import CommunityCard from "../components/CommunityCard";

const mockCommunities = [
  {
    image: "https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G",
    title: "Your React Native Community",
    description: "Communities you manage.",
    members: 500,
  },
];

const YourCommunity = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {mockCommunities.map((community, index) => (
      <CommunityCard key={index} {...community} />
    ))}
  </div>
);

export default YourCommunity;
