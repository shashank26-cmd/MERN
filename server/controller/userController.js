import User from "../Models/userModel.js";

export const register = async (req, res) => {
    const { username, email, phone, password } = req.body;

    try {
        // Check if the user with the given email already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            phone,
            password, // This will be hashed automatically by the pre-save hook in the model
        });

        // Save the user to the database
        await newUser.save();

        // Generate JWT token for the user
        const token = await newUser.generateJWTToken();

        // Clear the password before sending the response
        newUser.password = undefined;


        // Set the token as a cookie
        res.cookie('token', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true
        });

        res.status(200).json({
            success: true,
            message: 'User registration successful',
            user: newUser,
            token:token
            
        });

    } catch (error) {
        // Handle any errors that may occur during registration
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const login=async(req,res)=>{

const {email,password}=req.body;


const userExists=await User.findOne({email}); 

if(!userExists){
    return res.status(400).json({
        message:"invalid email"
    })
    console.log("con");

}
if (!(userExists && (await userExists.comparePassword(password)))){
    return res.status(401).json({
        message:"password is wrong"
    })
}
const token= await userExists.generateJWTToken();
userExists.password=undefined;

res.cookie("token",token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true
})

res.status(201).json({
    success:true,
    message:"Login successfully",
    userExists,
    token:token,
})






}
export const get=async(req,res)=>{
try{

const data=req.user;
console.log(data);

return res.status(201).json({
    msg:data
}) 


}
catch(e){
    console.log(`error from the route ${e}`)
}
}