import { useState } from "react";
import signup from "../assets/undraw_sign_up_n6im.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function Login() {
  const navigate = useNavigate();
  const { storeToken }=useAuth();


  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post("http://localhost:9036/api/v1/user/login", data, { headers });

      storeToken(response.data.token);
      if (response?.data?.success) {
        navigate('/');
      }

      setData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error appropriately (e.g., show a message to the user)
    }
  }

  return (
    <div className="bg-black w-full h-auto flex justify-center items-center">
      <div className="w-full max-w-screen-md h-[88.4vh] gap-2 flex justify-between items-center">
        <div className="w-1/2 flex justify-end items-center">
          <img src={signup} alt="" height="400" width="400" />
        </div>

        <div className="flex justify-end items-center mb-5 pb-5 ml-5 mt-5 w-1/2 h-auto">
          <form className="flex flex-col justify-center items-center text-white p-8 bg-gray-800 rounded-md shadow-md" autoComplete="off" onSubmit={onFormSubmit}>
            <h1 className="font-semibold text-lg mb-4">Login</h1>

            <div className="flex flex-col gap-2 mt-3">
              <label htmlFor="email" className="font-semibold text-white">
                Email
              </label>
              <input
                required
                type="text"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                className="bg-transparent px-3 py-2 border text-white rounded-md"
                placeholder="Enter your email..."
                autoComplete="new-password"
                id="email"
              />
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <label htmlFor="password" className="font-semibold text-white">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                className="bg-transparent px-3 py-2 border text-white rounded-md"
                placeholder="Enter your Password..."
                id="password"
                autoComplete="new-password"
              />
            </div>
            <button className="mt-5 bg-yellow-800 hover:bg-yellow-500 transition-all border rounded-md ease-in-out duration-300 cursor-pointer py-2 px-4 font-semibold text-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
