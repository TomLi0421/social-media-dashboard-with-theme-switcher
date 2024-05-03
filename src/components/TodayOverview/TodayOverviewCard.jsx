import React from "react";

function TodayOverviewCard({ todayOverviewData }) {
  const { socialMedia, title, icon, count, percentage, isIncrease } =
    todayOverviewData;

  let iconColor = "";
  if (socialMedia === "facebook") {
    iconColor = "text-facebook";
  } else if (socialMedia === "twitter") {
    iconColor = "text-twitter";
  } else if (socialMedia === "instagram") {
  } else if (socialMedia === "youtube") {
    iconColor = "text-youtube";
  }

  return (
    <div className="p-6 rounded bg-lightGrayishBlueCardBg dark:bg-darkDesaturatedBlueCardBg hover:cursor-pointer hover:bg-lightGrayishBlueCardBgHover hover:dark:bg-darkDesaturatedBlueCardBgHover">
      <div className="flex justify-between items-center">
        <p className="font-bold text-darkGrayishBlueText dark:text-desaturatedBlueText">
          {title}
        </p>
        <p>
          <i className={`fa-brands ${icon} fa-xl ${iconColor}`}></i>
        </p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <h2 className="font-bold text-4xl dark:text-white">{count}</h2>
        <p>
          <i
            className={`fa-solid fa-sm ${
              isIncrease
                ? "fa-caret-up text-limeGreen"
                : "fa-caret-down text-brightRed"
            } mr-1`}
          ></i>
          <span
            className={`text-sm ${
              isIncrease ? "text-limeGreen" : "text-brightRed"
            } font-bold`}
          >
            {percentage}%
          </span>
        </p>
      </div>
    </div>
  );
}

export default TodayOverviewCard;
