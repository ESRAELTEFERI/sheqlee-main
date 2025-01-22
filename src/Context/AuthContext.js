import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthContext Provider
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Authentication state
  const [user, setUser] = useState(null); // User information

  // Function to log in
  const login = (email, password) => {
    // Simulate a login process (Replace this with an actual API call)
    if (email === "test@example.com" && password === "password123") {
      setIsAuthenticated(true); // Set to true on successful login
      setUser({ name: "Microsoft", email }); // Mock user details
      return true; // Indicate success
    }
    return false; // Indicate failure
  };

  // Function to log out
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
