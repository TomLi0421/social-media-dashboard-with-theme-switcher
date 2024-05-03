import "./App.css";
import Header from "./components/Header/Header";
import SocialMediaFollower from "./components/SocialMediaFollower/SocialMediaFollower";
import TodayOverview from "./components/TodayOverview/TodayOverview";

function App() {
  return (
    <>
      <div className="absolute z-0 w-full h-1/3 md:h-1/4 rounded-b-3xl bg-veryPaleBlueTopBg dark:bg-veryDarkBlueTopBg"></div>
      <div className="font-inter bg-whileBg dark:bg-veryDarkBlueBg min-h-screen">
        <main className="py-9 max-w-screen-xl mx-auto">
          <Header />
          <SocialMediaFollower />
          <TodayOverview />

          <div className="mt-5 text-sm dark:text-white text-center md:mt-12">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="text-attributionLink"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/TomLi0421"
              className="text-attributionLink"
            >
              TomLi0421
            </a>
            .
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
