import React, { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import MainSection from "../Components/HeroSection/MainSection";
import TagsList from "../Components/Tags/TagList";
import ContentsList from "../Components/JobPostContent/ContentList";
import Register from "../Components/Register/Register";
import PlatformStats from "../Components/PlatformStatastics/PlatformStat";
import { AuthContext } from "../Context/AuthContext";
import ContentsListFreelancer from "../Components/JobPostContent/ContensListFreelancer";

const HomePage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  // Determine the order of components based on user type
  const isFreelancer = isAuthenticated && user?.userType === "freelancer";

  return (
    <>
      <MainSection />
      {isFreelancer ? (
        <>
          <ContentsList /> {/* Render first for freelancers */}
          <TagsList /> {/* Render after ContentsList for freelancers */}
          <ContentsListFreelancer />
        </>
      ) : (
        <>
          <TagsList /> {/* Default order */}
          <ContentsList />
        </>
      )}
      <Register />
      <PlatformStats />
      <Footer />
    </>
  );
};

export default HomePage;
