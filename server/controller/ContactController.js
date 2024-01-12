import Contact from "../Models/ContactModel.js";


export const contactForm=async(req,res,next)=>{

    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "message send successfully" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "message not delivered" });
      }
    };

