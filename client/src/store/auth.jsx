/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Retrieve the token from localStorage on component mount
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Function to store the token in localStorage
  const storeToken = (serverToken) => {
    try {
      localStorage.setItem("token", serverToken);
      setToken(serverToken);
    } catch (error) {
      // Handle localStorage error, e.g., storage quota exceeded
      console.error("Error storing token:", error);
    }
  };

  // Determine if the user is logged in based on the presence of the token
  const isLoggedIn = !!token;

  // Logout function to clear the token from state and localStorage
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // Provide the authentication context value to child components
  return (
    <AuthContext.Provider value={{ storeToken, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the AuthContext in components
export const useAuth = () => {
  return useContext(AuthContext);
};
