import React from "react";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import youtubeIcon from "../../assets/images/icon-youtube.svg";

function TodayOverviewCard({ todayOverviewData }) {
  const { socialMedia, title, count, percentage, isIncrease } =
    todayOverviewData;

  const mediaIcon = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    youtube: youtubeIcon,
  };

  return (
    <div className="p-6 rounded bg-lightGrayishBlueCardBg dark:bg-darkDesaturatedBlueCardBg hover:cursor-pointer hover:bg-lightGrayishBlueCardBgHover hover:dark:bg-darkDesaturatedBlueCardBgHover">
      <div className="flex justify-between items-center">
        <p className="font-bold text-darkGrayishBlueText dark:text-desaturatedBlueText">
          {title}
        </p>
        <p>
          <img src={mediaIcon[socialMedia]} alt={`${socialMedia} icon`} />
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
