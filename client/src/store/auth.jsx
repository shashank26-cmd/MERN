/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]); // Initialize as an empty array

  const storeToken = (serverToken) => {
    try {
      localStorage.setItem("token", serverToken);
      setToken(serverToken);
    } catch (error) {
      console.error("Error storing token:", error);
    }
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      const response = await axios.get("http://localhost:9036/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error in user authentication:", error);
    }
  };

  const getServices = async () => {
    try {
      const response = await axios.get("http://localhost:9036/api/v1/service/service");
      setServices(response.data.mssg);
    } catch (error) {
      console.error("Error in fetching services:", error);
    }
  };
  const fetchData = async () => {
    await getServices();
    await userAuthentication();
  };

  useEffect(() => {
   
    fetchData();
  }, [token]);

  return (
    <AuthContext.Provider value={{ services, storeToken, LogoutUser, isLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
