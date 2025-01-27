import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for existing user session
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
    }
  }, []);

  const login = (email, password) => {
    // Retrieve user data from localStorage (mock database)
    // const savedData = JSON.parse(localStorage.getItem("registrationData"));
    const freelancers = JSON.parse(localStorage.getItem("freelancers")) || [];
    const companies = JSON.parse(localStorage.getItem("companies")) || [];

    //   const user = [...freelancers, ...companies].find(
    //     (u) => u.email === email && u.password === password
    //   );

    //   if (user) {
    //     setIsAuthenticated(true);
    //     setUser(user); // Includes userType, email, etc.
    //     return true;
    //   }

    //   return false;
    // };

    const foundUser = [...freelancers, ...companies].find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setIsAuthenticated(true);
      setUser(foundUser); // Includes userType, email, etc.
      localStorage.setItem("currentUser", JSON.stringify(foundUser)); // Save session to localStorage
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
