import { useState } from "react";
import dream from "../assets/dream.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
    const [data, setdata] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    });
    const navigate=useNavigate();


    function handleInputChange(e) {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:9036/api/v1/user/register", data);
        if(response?.data?.success){
            navigate("/");
        }

        setdata({
            ...data,
            username: "",
            email: "",
            password: "",
            phone: ""


        })
    }

    return (
        <>
            <div className="bg-black h-auto w-full flex justify-center items-center px-4 gap-4 ">
                <div className="w-1/2 flex items-center justify-center mt-5">
                    <img src={dream} alt="" height="400" width="400" />
                </div>
                <div className="flex items-center justify-center w-1/2 h-auto">
                    <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center items-center text-white mt-3">
                        <div className="flex flex-col gap-1 mt-3">
                            <label htmlFor="name" className="font-semibold">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={handleInputChange}
                                className="bg-transparent px-2 py-1 border"
                                placeholder="Enter your name..."
                                id="username"
                            />
                        </div>
                        <div className="flex flex-col mt-3 gap-1">
                            <label htmlFor="email" className="font-semibold">
                                Email
                            </label>
                            <input
                                required
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                className="bg-transparent px-2 py-1 border"
                                placeholder="Enter your email..."
                                id="email"
                            />
                        </div>
                        <div className="flex flex-col mt-3 gap-1">
                            <label htmlFor="password" className="font-semibold">
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleInputChange}
                                className="bg-transparent px-2 py-1 border"
                                placeholder="Enter your password..."
                                id="password"
                            />
                        </div>
                        <div className="flex flex-col mt-3 gap-1">
                            <label htmlFor="phone" className="font-semibold">
                                Phone No
                            </label>
                            <input
                                required
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={handleInputChange}
                                className="bg-transparent px-2 py-1 border"
                                placeholder="Enter your phone number..."
                                id="phone"
                            />
                        </div>
                        <button className="mt-3 bg-yellow-800 hover:bg-yellow-500 transition-all border rounded ease-in-out duration-300 cursor-pointer py-2 px-4 font-semibold text-lg">
    Create account
</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
