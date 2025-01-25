import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Retrieve user data from localStorage (mock database)
    // const savedData = JSON.parse(localStorage.getItem("registrationData"));
    const freelancers = JSON.parse(localStorage.getItem("freelancers")) || [];
    const companies = JSON.parse(localStorage.getItem("companies")) || [];

    const user = [...freelancers, ...companies].find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setUser(user); // Includes userType, email, etc.
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
