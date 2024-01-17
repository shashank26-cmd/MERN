import { useState } from "react";
import dream from "../assets/dream.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });

  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9036/api/v1/user/register", data);
      console.log(response);

      if (response?.data?.success) {
        navigate("/");
      }

      setData({
        username: "",
        email: "",
        password: "",
        phone: ""
      });
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error appropriately (e.g., show a message to the user)
    }
  }

  return (
    <>
      <div className="bg-black h-auto w-full flex justify-center items-center">
        <div className="w-full max-w-screen-md h-[88.4vh] gap-4 flex justify-between items-center">
          <div className="w-1/2 flex items-center justify-start mr-5 mt-5">
            <img src={dream} alt="" height="400" width="300" />
          </div>
          <div className="flex items-center justify-end w-1/2 h-auto">
            <form onSubmit={onFormSubmit} noValidate autoComplete="off" className="flex flex-col justify-center items-center text-white p-5 bg-gray-800 rounded-md shadow-md">
              <h1 className="font-semibold text-lg mb-4">Create Account</h1>

              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="font-semibold text-white">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleInputChange}
                  className="bg-transparent px-3 py-2 border text-white rounded-md"
                  placeholder="Enter your name..."
                  id="username"
                  autoComplete="new-password"
                  />
              </div>

              <div className="flex flex-col gap-2 ">
                <label htmlFor="email" className="font-semibold text-white">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  className="bg-transparent px-3 py-2 border text-white rounded-md"
                  placeholder="Enter your email..."
                  id="email"
                  autoComplete="new-password"
                  />
              </div>

              <div className="flex flex-col gap-2 ">
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
                  placeholder="Enter your password..."
                  id="password"
                  autoComplete="new-password"
                  />
              </div>

              <div className="flex flex-col gap-2 ">
                <label htmlFor="phone" className="font-semibold text-white">
                  Phone No
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputChange}
                  className="bg-transparent px-3 py-2 border text-white rounded-md"
                  placeholder="Enter your phone number..."
                  id="phone"
                  autoComplete="new-password"
                  />
              </div>

              <button className="mt-3  bg-yellow-800 hover:bg-yellow-500 transition-all border rounded-md ease-in-out duration-300 cursor-pointer py-2 px-4 font-semibold text-lg">
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
