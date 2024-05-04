import React, { useState } from "react";

function ToggleBtn() {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleDarkThemeChange = () => {
    setDarkTheme((prevTheme) => !prevTheme);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className="w-12 h-6 p-1 rounded-xl bg-lightToggle dark:bg-darkToggle hover:cursor-pointer"
      onClick={handleDarkThemeChange}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white dark:bg-veryDarkBlueBg ${
          !darkTheme
            ? "transition duration-300 translate-x-6"
            : "transition duration-300 translate-x-0"
        } `}
      ></div>
    </div>
  );
}

export default ToggleBtn;
