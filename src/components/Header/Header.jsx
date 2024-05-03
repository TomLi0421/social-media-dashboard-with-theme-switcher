import React from "react";
import ToggleBtn from "./ToggleBtn";

function Header() {
  return (
    <div className="px-6 relative z-10 md:flex md:justify-between items-baseline">
      <div>
        <h1 className="font-bold text-2xl dark:text-whileText">
          Social Media Dashboard
        </h1>
        <p className="font-bold text-darkGrayishBlueText">
          Total Followers: 23,004
        </p>
      </div>
      <hr className="h-px mt-5 bg-gray-600 border-0 md:hidden" />

      <div className="flex justify-between mt-5 md:justify-normal">
        <p className="font-bold text-darkGrayishBlueText text-darkToggle md:mr-3">
          Dark Mode
        </p>
        <ToggleBtn />
      </div>
    </div>
  );
}

export default Header;
