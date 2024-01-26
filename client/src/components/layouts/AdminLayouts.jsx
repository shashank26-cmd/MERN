import { Link, Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";

function AdminLayout() {
  return (
    <>
      <div className="md:w-full w-1/2 bg-blue-700">
        <ul className="flex gap-8 mx-10 px-10 items-center">
          <Link to="/admin/users">
            <li className="flex items-center">
              <FaUsers className="mr-1" /> Users
            </li>
          </Link>
          <Link to="/admin/contact">
            <li className="flex items-center">
              <MdContactPhone  className="mr-1" /> Contact
            </li>
          </Link>
          <Link to="/Service">
            <li className="flex items-center">
              <MdMiscellaneousServices  className="mr-1" /> Services
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center">
              <FaHome   className="mr-1" /> Home
            </li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default AdminLayout;
