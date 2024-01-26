import { useAuth } from "../store/auth";
function About(){

    const {user}=useAuth();
    

    return(
        <>
        <p>helloo about</p>
        <h1 className="text-semibold text-center font-thin fontsize-40px">
Welcome,

{user ? `${user.data.username} to our website`  : `to our website`}
        </h1>
        </>
    )


}
export default About;