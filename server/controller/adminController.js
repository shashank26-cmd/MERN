import User from "../Models/userModel.js";
import Contact from "../Models/ContactModel.js"

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.find({},{password:0});
    
    return res.status(200).json({
      response
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
