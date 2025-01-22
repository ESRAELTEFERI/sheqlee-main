import React from "react";
// import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import MainSection from "../Components/HeroSection/MainSection";
import TagsList from "../Components/Tags/TagList";
import ContentsList from "../Components/JobPostContent/ContentList";
import Register from "../Components/Register/Register";
import PlatformStats from "../Components/PlatformStatastics/PlatformStat";
// import Header from "../Components/Header/Main/Header";
// import JobsData from "../Components/Jobs/JobsData";

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Header /> */}
      <MainSection />
      <TagsList />
      <ContentsList />
      {/* <JobsData /> */}
      <Register />
      <PlatformStats />
      <Footer />
    </>
  );
};

export default HomePage;
