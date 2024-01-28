import User from "../Models/userModel.js";
import Contact from "../Models/ContactModel.js"

export const getAllUsers = async (req, res) => {
  try {
    const data = await User.find({},{password:0});
    console.log(data);
    return res.status(200).json({
      data
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};



export const getAllContacts=async(req,res)=>{


const response=await Contact.find();


//If No contacts 


if(!response || response.length===0){
    return res.status(404).json({
        message:"No Contact is Present in DB"
    })
}


return  res.status(201).json({
    response
});


};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.deleteOne({ _id: id });

    res.status(201).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


