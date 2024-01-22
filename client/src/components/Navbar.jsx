import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

function Navbar(){
    const {isLoggedIn}=useAuth();
return(
<>
<div className="flex justify-between items-center py-4  w-full h-auto bg-black">


<div className="w-1/2 flex justify-center items-center pr-10">
<Link to="/" >
<div className="flex  text-violet-800 justify-center items-center mr-10 ">
      SAM 
</div>
</Link>
</div>




<div className="flex justify-evenly items-center  w-1/2  ">
<Link to="/">
    <button className="border text-violet-800 border-yellow-500 px-2 py-1 rounded-md font-semibold  cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
        Home
    </button>
</Link>
<Link to="/About">
    <button className="border text-violet-800 border-yellow-500 px-2 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
    About
    </button>
</Link>
<Link to="/Contact">
<button className="border text-violet-800 border-yellow-500 px-2 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
    Contact
    </button>
</Link>


{isLoggedIn ? (
            <Link to="/logout">
              <button className="border text-violet-800 border-yellow-500 px-2 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="border text-violet-800 border-yellow-500 px-2 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                  Login
                </button>
              </Link>
            </>
          )}





<Link to="/Service">
<button className="border text-violet-800 border-yellow-500 px-2 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
    Service
    </button>
</Link>
<Link to="/register">
<button className="border text-violet-800 border-yellow-500 px-2 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
    Register
    </button>
</Link>


</div>



</div>






</>



)




}
export default Navbar;