import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

function AdminUsers() {
  const { authorizationToken } = useAuth();
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:9036/api/v1/admin/users", {
        headers: {
          Authorization: authorizationToken,
        },
      });
      setData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-10 mb-10">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-3 text-black">Name</th>
                <th className="px-4 py-3 text-black">Email</th>
                <th className="px-4 py-3 text-black">PhoneNo</th>
                <th className="px-4 py-3 text-black">Edit</th>
                <th className="px-4 py-3 text-black">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-2 text-center text-black">{user.username}</td>
                  <td className="px-4 py-2 text-center text-black">{user.email}</td>
                  <td className="px-4 py-2 text-center text-black">{user.phone}</td>
                  <td className="px-4 py-2 text-center text-black">Edit</td>
                  <td className="px-4 py-2 text-black">Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminUsers;
