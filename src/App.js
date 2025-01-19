import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import Logo from "./Components/Header/NewHeader/Logo";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <Logo /> */}
      <Routes>
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
      </Routes>
    </Router>
  );
};

export default App;
