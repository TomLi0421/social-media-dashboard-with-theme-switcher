import React from "react";

function SocialMediaFollowerCard({ socialMedia }) {
  const { name, icon, username, follower, today, isIncrease } = socialMedia;

  let mediaColor = {};

  if (name === "facebook") {
    mediaColor = {
      backgroundColor: "bg-facebook",
      iconColor: "text-facebook",
    };
  } else if (name === "twitter") {
    mediaColor = {
      backgroundColor: "bg-twitter",
      iconColor: "text-twitter",
    };
  } else if (name === "instagram") {
    mediaColor = {
      backgroundColor: "bg-instagram",
      iconColor: "",
    };
  } else if (name === "youtube") {
    mediaColor = {
      backgroundColor: "bg-youtube",
      iconColor: "text-youtube",
    };
  }

  return (
    <div
      className={`pt-1 ${mediaColor.backgroundColor} rounded hover:cursor-pointer`}
    >
      <div className="w-full py-6 space-y-6 text-center rounded-b bg-lightGrayishBlueCardBg dark:bg-darkDesaturatedBlueCardBg hover:bg-lightGrayishBlueCardBgHover hover:dark:bg-darkDesaturatedBlueCardBgHover">
        <p>
          <i
            className={`fa-brands ${icon} fa-xl ${mediaColor.iconColor} mr-2`}
          ></i>
          <span className="text-sm font-bold text-darkGrayishBlueText dark:text-desaturatedBlueText">
            {username}
          </span>
        </p>
        <div>
          <h2 className="text-5xl font-bold mb-1.5 dark:text-white">
            {follower}
          </h2>
          <p className="text-sm tracking-widest uppercase text-darkGrayishBlueText dark:text-desaturatedBlueText">
            {name == "youtube" ? "subscribers" : "followers"}
          </p>
        </div>
        <p className="flex items-center justify-center">
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
            {today} Today
          </span>
        </p>
      </div>
    </div>
  );
}

export default SocialMediaFollowerCard;
