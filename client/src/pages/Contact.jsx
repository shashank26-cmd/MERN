import mssg from '../assets/Message.svg';
import { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios';

function Contact() {
  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: ''
  });

  const { user } = useAuth();
  console.log("from contact.jsx", user);

  useEffect(() => {
    if (user.data) {
      setContact({
        username: user.data.username,
        email: user.data.email,
        message: ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    });
  };

  const submit =async (e) => {
    e.preventDefault();
const response=await axios.post(`http://localhost:9036/api/v1/contact/contact`,contact);
console.log(response);
setContact({
  username:"",
  email:"",
message:""
})

  }

  return (
    <>
      <p className="text-center font-bold text-slate-50 text-3xl mt-5">Contact Us</p>

      <div className="flex justify-center items-center mt-7">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={mssg} alt="Message Box" height="300px" width="300px" />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center flex-wrap">
          <form onSubmit={submit} className="bg-gray-100 p-5 rounded-md shadow-md w-full lg:w-2/3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 mb-2 text-black"
              type="text"
              onChange={handleInputChange}
              value={contact.username}
              id="name"
              name="username"
              placeholder="Your Name"
            />

            <label className="block text-black text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 mb-2 text-black"
              type="email"
              id="email"
              onChange={handleInputChange}
              value={contact.email}
              name="email"
              placeholder="Your Email"
            />

            <label className="block text-black  text-gray-700 font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full border rounded-md py-2 px-3 mb-2 text-black"
              id="message"
              onChange={handleInputChange}
              value={contact.message}
              name="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
