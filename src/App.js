import React, { useState } from "react";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import ClientsPage from "./Pages/ClientsPage";
import CategoriesDetailPage from "./Pages/CategoriesDetailPage";
import TagsPage from "./Pages/TagsPage";
import TagDetailPage from "./Pages/TagsDetailPage";
import CompaniesPage from "./Pages/CompaniesPage";
import CompaniesDetailPage from "./Pages/CompaniesDetailPage";
import ContactPage from "./Pages/ContactPage";
import FAQPage from "./Pages/FAQPage";
import ScrollToTop from "./Components/ScrollToTop";
import SignUpPageCompany from "./Pages/SignUpPageCompany";
import SignUpPageFreelancers from "./Pages/SignUpPageFreelancers";
import LogInPage from "./Pages/LogInPage";
import ResetPage from "./Pages/ResetPage";
import NewPasswordPage from "./Pages/NewPasswordPage";
import PrivacyPolicyPage from "./Pages/PravacyPolicyPage";
import Header from "./Components/Header/Main/Header";
import VacancyPage from "./Pages/VacancyPage";
import VacancyTwoPage from "./Pages/VacancyTwoPage";
import DashboardComPage from "./Pages/DashboardComPage";
import ComProfilePage from "./Pages/ComProfilePage";
import ComSettingPage from "./Pages/ComSettingPage";
import DashboardFreePage from "./Pages/DashboardFreePage";
import EditProfilePage from "./Pages/EditProfilePage";
import FreeSettingsPage from "./Pages/FreeSettingsPage";

const App = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handlers for login and logout
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      {/* // <Router> */}
      <ScrollToTop />
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/all-jobs" element={<JobsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/categories/:categoryName"
          element={<CategoriesDetailPage />}
        />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/tags/:tagsName" element={<TagDetailPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route
          path="/companies/:companysName"
          element={<CompaniesDetailPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/signup" element={<SignUpPageCompany />} />
        <Route path="/signupfreelancers" element={<SignUpPageFreelancers />} />
        <Route path="/forgotPassword" element={<ResetPage />} />
        <Route path="/resetPassword" element={<NewPasswordPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />

        {/* Login Route */}
        <Route path="/login" element={<LogInPage onLogin={handleLogin} />} />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />}
        />
        <Route path="/vacancy" element={<VacancyPage />} />
        <Route path="/vacancy-2" element={<VacancyTwoPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />

        <Route path="/dashboard-company" element={<DashboardComPage />} />
        <Route path="/company-profile" element={<ComProfilePage />} />
        <Route path="/account-settings-company" element={<ComSettingPage />} />

        <Route path="/dashboard-freelance" element={<DashboardFreePage />} />

        <Route
          path="/account-settings-freelancer"
          element={<FreeSettingsPage />}
        />
      </Routes>
      {/* </Router> */}
    </>
  );
};

export default App;
