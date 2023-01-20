const User=require("../model/User")
const bcrypt = require("bcryptjs")
   const getAllUser= async (req,res,next)=>{
    let users;
    try{
        users= await User.find();
    }catch(err){
        console.log(err)
    }

    if(!users){
        return res.status(404).json({msg:"no users found"})
    }
    else{
        return res.status(200).json({users})
    }
}

  const signup = async(req,res,next)=>{
    const {name,email,password} = req.body;
    let existingUser;
    try{
            existingUser= await User.findOne({email})
            
    }catch(err){
        console.log(err)
    }

    if(existingUser){
        return res.status(400).json({msg:"user already available"})
    }
    else{
        const hashedPassword= bcrypt.hashSync(password)
        const user= new User({
            name,
            email,
            password:hashedPassword,
            blogs:[]
        })

        try{
            user.save();    
        }catch(err){
            console.log(err)
        }
        return res.status(201).json(user);
    }

    
}

  const login = async (req,res,next)=>{
    const {email,password} = req.body;

    let existingUser;
    try{
        existingUser= await User.findOne({email})
        
}catch(err){
    console.log(err)
}

if(!existingUser){
    return res.status(400).json({msg:"User not found!"})
}else{
    const isPasswordCorrect= bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({msg:"password incorrect"})

    }
    return res.status(200).json({msg:"login success"})
}
}

module.exports={login,signup,getAllUser}
