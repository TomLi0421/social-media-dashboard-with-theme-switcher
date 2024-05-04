import React from "react";
import TodayOverviewCard from "./TodayOverviewCard";

const todayOverviewData = [
  {
    id: 1,
    socialMedia: "facebook",
    title: "Page Views",
    count: "87",
    percentage: 3,
    isIncrease: true,
  },
  {
    id: 2,
    socialMedia: "facebook",
    title: "Likes",
    count: "52",
    percentage: 3,
    isIncrease: false,
  },
  {
    id: 3,
    socialMedia: "instagram",
    title: "Likes",
    count: "5462",
    percentage: 2257,
    isIncrease: false,
  },
  {
    id: 4,
    socialMedia: "instagram",
    title: "Profile Views",
    count: "52k",
    percentage: 1375,
    isIncrease: true,
  },
  {
    id: 5,
    socialMedia: "twitter",
    title: "Retweets",
    count: "117",
    percentage: 303,
    isIncrease: true,
  },
  {
    id: 6,
    socialMedia: "twitter",
    title: "Likes",
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
    id: 8,
    socialMedia: "youtube",
    title: "Total Views",
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
      <div className="mt-6 space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:grid md:grid-cols-4 md:gap-6 md:space-y-0">
        {todayOverviewData.map((data) => (
          <TodayOverviewCard key={data.id} todayOverviewData={data} />
        ))}
      </div>
    </div>
  );
}

export default TodayOverview;
