// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);
//   const [user, setUser] = useState(null);

//   const login = (email, password) => {
//     if (email === "test@example.com" && password === "password123") {
//       setIsAuthenticated(true);
//       setUser({ name: "Microsoft", email });
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Retrieve user data from localStorage (mock database)
    const savedData = JSON.parse(localStorage.getItem("registrationData"));

    if (
      savedData &&
      savedData.email === email &&
      savedData.password === password
    ) {
      setIsAuthenticated(true);
      setUser({ ...savedData }); // Includes userType, email, etc.
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
