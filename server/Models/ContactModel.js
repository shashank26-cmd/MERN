import { model,Schema } from "mongoose";

const contactSchema =new Schema({

    Name:{
        type:String,
        required:true,


    },
    email:{
        type:String,
        required:true,
    },
    Message:{
        type:String,
        required:true,
    }},{
        timestamps:true
    });

    const Contact=model('Contact',contactSchema);
    export default Contact;