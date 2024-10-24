import React from "react";
import CommunityCard from "../components/CommunityCard";

const mockCommunities = [
  {
    image: "https://miro.medium.com/v2/resize:fit:1140/0*CM3uBM0SMNvTArPN.jpg",
    title: "React Enthusiasts",
    description: "A community for React developers.",
    members: 1200,
  },
  {
    image:
      "https://crypto.news/app/uploads/2024/08/crypto-news-broken-toncoin-option05.webp",
    title: "Blockchain Devs",
    description: "Discuss decentralized tech.",
    members: 800,
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1140/0*CM3uBM0SMNvTArPN.jpg",
    title: "React Enthusiasts",
    description: "A community for React developers.",
    members: 1200,
  },
  {
    image:
      "https://crypto.news/app/uploads/2024/08/crypto-news-broken-toncoin-option05.webp",
    title: "Blockchain Devs",
    description: "Discuss decentralized tech.",
    members: 800,
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1140/0*CM3uBM0SMNvTArPN.jpg",
    title: "React Enthusiasts",
    description: "A community for React developers.",
    members: 1200,
  },
  {
    image:
      "https://crypto.news/app/uploads/2024/08/crypto-news-broken-toncoin-option05.webp",
    title: "Blockchain Devs",
    description: "Discuss decentralized tech.",
    members: 800,
  },
];

const ExploreCommunity = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {mockCommunities.map((community, index) => (
      <CommunityCard key={index} {...community} />
    ))}
  </div>
);

export default ExploreCommunity;
