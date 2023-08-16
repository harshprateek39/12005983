import  express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
const router = express.Router();
import axios from 'axios';



router.get('/',  async(req,res)=>{

    const postData={
        
            companyName: "TrainBuddy",
            clientID: "8bff045b-156f-4ff0-a0d5-b39967f645d9",
            ownerName: "Harsh Prateek",
            ownerEmail: "harshprateek39@gmail.com",
            rollNo: "12005983",
            clientSecret: "NopHgCEHlPRVlimw"
        
    }
    try {
        const authData=  await axios.post("http://20.244.56.144/train/auth",postData); 
        if( authData){
            res.cookie('trainBuddy',authData.data.access_token);
            const cocky=  await req.cookies['trainBuddy'];
        
         const trainData= await axios.get("http://20.244.56.144/train/trains",{
                headers: {
                  Authorization: `Bearer ${cocky}`
                }
              });
        res.json(trainData.data);
        res.json(trainData.data);
        }
        
    } catch (error) { 
        console.log(error);
    } 
   
})
export { router as trainbuddy};

