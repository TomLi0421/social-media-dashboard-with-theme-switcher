import React from "react";
import TodayOverviewCard from "./TodayOverviewCard";

const todayOverviewData = [
  {
    id: 1,
    socialMedia: "facebook",
    title: "Page Views",
    icon: "fa-square-facebook",
    count: "87",
    percentage: 3,
    isIncrease: true,
  },
  {
    id: 2,
    socialMedia: "facebook",
    title: "Likes",
    icon: "fa-square-facebook",
    count: "52",
    percentage: 3,
    isIncrease: false,
  },
  {
    id: 3,
    socialMedia: "instagram",
    title: "Likes",
    icon: "fa-instagram",
    count: "5462",
    percentage: 2257,
    isIncrease: false,
  },
  {
    id: 4,
    socialMedia: "instagram",
    title: "Profile Views",
    icon: "fa-instagram",
    count: "52k",
    percentage: 1375,
    isIncrease: true,
  },
  {
    id: 5,
    socialMedia: "twitter",
    title: "Retweets",
    icon: "fa-x-twitter",
    count: "117",
    percentage: 303,
    isIncrease: true,
  },
  {
    id: 6,
    socialMedia: "twitter",
    title: "Likes",
    icon: "fa-x-twitter",
    count: "507",
    percentage: 553,
    isIncrease: true,
  },
  {
    id: 7,
    socialMedia: "youtube",
    title: "Likes",
    icon: "fa-youtube",
    count: "107",
    percentage: 19,
    isIncrease: false,
  },
  {
    id: 7,
    socialMedia: "youtube",
    title: "Total Views",
    icon: "fa-youtube",
    count: "1407",
    percentage: 12,
    isIncrease: false,
  },
];

function TodayOverview() {
  return (
    <div className="px-6 pt-9 md:pt-12">
      <h2 className="font-bold text-2xl text-darkGrayishBlueText">
        Overview - Today
      </h2>
      <div className="mt-6 space-y-6 md:grid md:grid-cols-4 md:gap-6 md:space-y-0">
        {todayOverviewData.map((data) => (
          <TodayOverviewCard todayOverviewData={data} />
        ))}
      </div>
    </div>
  );
}

export default TodayOverview;
