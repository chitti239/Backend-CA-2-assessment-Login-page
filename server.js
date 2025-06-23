const { error } = require("console");
const express = require("express");

const app = express();

app.get("/api",(req,res)=>{
    res.status(200).send({Message:"Server is running on port 9000."})
})

app.post("/login",(req,res)=>{
    
    const {email,password} = req.query;

    if(!email){
        return res.status(400).send({error:"Email cannot be empty."});
    }
    if(!password){
        return res.status(400).send({error:"Password cannot be empty."});
    }
    const user = {email,password}
    return res.status(200).send({message:"You have loged in successfully..",user});
    
})


app.listen(9000,()=>{
    try {
        console.log("server connected successfully."); 
    } catch (error) {
        console.log("Error while connecting to server");
    }
})