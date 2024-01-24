/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Correct import statement

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const[services,setservices]=useState("")

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


  // Authentication 
   const userAuthentictaion = async () => {
    try {
      const response = await axios.get("http://localhost:9036/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
console.log(response);
      setUser(response.data);


      // Assuming the response.data contains user information
      setUser(response.data);
    } catch (e) {
      console.log("error in fetching", e);
    }
  };

 const getServices= async()=>{
  const response = await axios.get(`http://localhost:9036/api/v1/service/service`);
  console.log(response.data.mssg);
  setservices(response.data.mssg);
 }

  useEffect(() => {
    getServices();
    userAuthentictaion();
  }, []); 

  return (
    <AuthContext.Provider value={{services, storeToken, LogoutUser, isLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
