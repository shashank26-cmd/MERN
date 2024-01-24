import Service from "../Models/ServiceMode.js";

export const Services=async(req,res)=>{

try{


    const response= await Service.find();

    return res.status(201).json({
        mssg:response    })



}
catch(e){
    console.log("services error ",e);
}



}
