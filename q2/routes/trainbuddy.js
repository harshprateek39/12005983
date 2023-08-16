import  express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
const router = express.Router();
import axios from 'axios';



router.get('/',  async(req,res)=>{

    const postData={
        
            companyName: "TrainBuddy",
            clientID: process.env.clientId,
            ownerName: "Harsh Prateek",
            ownerEmail: "harshprateek39@gmail.com",
            rollNo: "12005983",
            clientSecret: process.env.clientSecret
        
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

