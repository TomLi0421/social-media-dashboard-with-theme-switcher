import React from "react";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import youtubeIcon from "../../assets/images/icon-youtube.svg";

function SocialMediaFollowerCard({ socialMedia }) {
  const { name, username, follower, today, isIncrease } = socialMedia;

  const mediaColor = {
    facebook: "bg-facebook",
    twitter: "bg-twitter",
    instagram: "bg-instagram",
    youtube: "bg-youtube",
  };

  const mediaIcon = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    instagram: instagramIcon,
    youtube: youtubeIcon,
  };

  return (
    <div className={`pt-1 ${mediaColor[name]} rounded hover:cursor-pointer`}>
      <div className="w-full py-6 space-y-6 text-center rounded-b bg-lightGrayishBlueCardBg dark:bg-darkDesaturatedBlueCardBg hover:bg-lightGrayishBlueCardBgHover hover:dark:bg-darkDesaturatedBlueCardBgHover">
        <p className="flex justify-center">
          <img className="mr-3" src={mediaIcon[name]} alt={`${name} icon`} />
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
