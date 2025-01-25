import React from "react";
import Footer from "../Components/Footer/Footer";
import BreadCrumbEdit from "../Components/EditProfile/BreadCrumbEdit.js";
import Profile from "../Components/EditProfile/Profile.js";

const EditProfilePage = () => {
  return (
    <>
      <BreadCrumbEdit />
      <Profile />
      <Footer />
    </>
  );
};

export default EditProfilePage;
