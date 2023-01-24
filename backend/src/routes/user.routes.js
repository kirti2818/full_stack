const express = require("express")
const cors = require("cors")
const app = express.Router()
const Usermodel = require("../models/user.model")
app.use(express.json())
app.use(cors())


//middlewares
const authenticator = async(req,res,next)=>{
  const {username,password} = req.body;
  try{
    let user = await Usermodel.findOne({username,password})
  if(user){
    req.userId = user.id
    next()
  }else{
    console.log("user does not exist or wrong credentials")
    res.send("user does'nt exist or wrong credentials")
  }
  }catch(e){
    console.log(`Error : ${e.message}`)
    res.send(`Error : ${e.message}`)
  }
}


const validator = async(req,res,next)=>{
  let token = req.headers.token;
  if(!token){
    return res.send("Token missing")
  }
 const [Id,email,role] = token.split("_#_")
  console.log(Id,email,role)
  // let id = req.params.id
  // console.log(id)
  try{
    let headerUser = await Usermodel.findById(Id)
    // console.log(headerUser)
    if(headerUser){
      if(headerUser.role === "Admin"){
           next()
      }else{
        console.log("role of headerUser is not admin")
        res.send("role of headerUser is not admin")
      }
    }else{
      console.log("headerUser toh exist hi nahi karta")
      res.send("headerUser toh exist hi nahi karta")
    }
  }catch(e){
    console.log(e.message)
    res.send(e.message)
  }
}


app.get("/",async(req,res)=>{
  try{
    let allData = await Usermodel.find()
    console.log("all data")
    res.send(allData)
  }catch(e){
    console.log(e.message)
    res.send(e.message)
  }
})

app.get("/:id",async(req,res)=>{
  const id = req.params.id
  console.log(id)
  try{
    let user = await Usermodel.findById(id)
    if(user){
      console.log(`User with id ${id}`)
    res.send(user)
    }else{
      console.log("user does not exist")
      res.send("user does not exist")
    }
  }catch(e){
    console.log(e.message)
    res.send(e.message)
  }
})

app.post("/signup",async(req,res)=>{
    const {username,email,password,confirmpassword,location,role,DOB} = req.body
    console.log(req.body)
    try{
     let existingUser = await Usermodel.findOne({email:email})
     if(existingUser){
        console.log(`${email} this email has been used by another user`)
        res.send(`${email} this email has been used by another user...Try another one`)
     }else{
        let createUser = new Usermodel(req.body)
        await createUser.save()
        console.log("User successfully signed up")
        res.send("Successfully signed up")
     }
    }catch(e){
        console.log(e.message)
        res.send(e.message)
    }
})
app.post("/login", authenticator, async(req,res)=>{
    // const {username,password} = req.body;
    // try{
    //  let loginUser = await Usermodel.findOne({username:username,password:password})
    //  if(loginUser){
    //     console.log("User login successfully")
    //     res.send({token:`${id}_#_${email}_#_${role}`})
    //  }else{
    //     console.log("Wrong Credentials")
    //     res.send("Wrong Credentials")
    //  }
    // }catch(e){
    //     console.log(e.message)
    //     res.send(e.message)
    // }
    let user = await Usermodel.findById(req.userId)
    console.log("Login successfully")
    res.send({token:`${user.id}_#_${user.email}_#_${user.role}`})
   
})

app.delete("/:id",  validator, async(req,res)=>{
 
  let id = req.params.id;
  try{
   let user = await Usermodel.findByIdAndDelete(id)
   if(user){
    console.log("deleted successfully")
    res.send("deleted successfully")
   }else{
    console.log("already deleted")
    res.send("already deleted")
   }
  
  }catch(e){
    console.log(e.message)
    res.send(e.message)
  }
})

app.patch("/:id", validator ,async(req,res)=>{
  // res.send("patch api")
  let id = req.params.id
  try{
    let user = await Usermodel.findByIdAndUpdate(id,req.body,{new:true})
    if(user){
      res.send(user)
    }else{
      res.send("user doesnot exist or not able to update")
    }
  }catch(e){
    console.log(e.message)
    res.send(e.message)
  }
})
module.exports = app;