import React from "react";
import SocialMediaFollowerCard from "./SocialMediaFollowerCard";

const socialMedias = [
  {
    id: 1,
    name: "facebook",
    username: "@nathanf",
    follower: "1987",
    today: 12,
    isIncrease: true,
  },
  {
    id: 2,
    name: "twitter",
    username: "@nathanf",
    follower: "1044",
    today: 99,
    isIncrease: true,
  },
  {
    id: 3,
    name: "instagram",
    username: "@realnathanf",
    follower: "11k",
    today: 1099,
    isIncrease: true,
  },
  {
    id: 4,
    name: "youtube",
    username: "Nathan F.",
    follower: "8239",
    today: 144,
    isIncrease: false,
  },
];

function SocialMediaFollower() {
  return (
    <div className="relative z-10 px-6 space-y-6 pt-9 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:grid md:grid-cols-4 md:space-y-0 md:gap-x-6">
      {socialMedias.map((socialMedia) => (
        <SocialMediaFollowerCard
          key={socialMedia.id}
          socialMedia={socialMedia}
        />
      ))}
    </div>
  );
}

export default SocialMediaFollower;
