const mongoose= require("mongoose")
const Blog = require("../model/Blog")
const User = require("../model/User")

 const getAllBlog= async (req,res,next)=>{
    let blogs;
    try{
        blogs= await Blog.find()
        
    }catch(err){
        console.log(err)
    }
    if(!blogs){
        res.status(400).json({msg:"no blog found"})


    }
    res.status(200).json({blogs})
     
}


 const addBlog= async (req,res,next)=>{
    const {title,description,image,user}=req.body;
    let existingUser;
    try{
            existingUser= await User.findById(user)
    }catch(err){
        console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({msg:"user not found"})
    }
    const blog= new Blog({
        title,
        description,
        image,
        user
    })

    try{
            // await blog.save()
            const session= await mongoose.startSession();
            session.startTransaction()
            await blog.save({session});
            existingUser.blogs.push(blog)
            await existingUser.save({session})
            await session.commitTransaction()
    }catch(err){
        console.log(err)
    }
    res.status(200).json(blog)
}
 const updateBlog= async (req,res,next)=>{
    const {title,description}=req.body;
    const blogId= req.params.id;
    let blog;

    try{
        blog= await Blog.findByIdAndUpdate(blogId,{
            title,
            description
        })
    }catch(err){
        console.log(err)
    }

    if(!blog){
        return res.status(500).json({msg:"unable to update the blog"})
    }
    return res.status(200).json({blog})
     
}

 const getById= async (req,res,next)=>{
    let blog;
    const blogId=req.params.id;
    try{
        blog=await Blog.findById(blogId);
    }catch(err){
        console.log(err)
    }
    if(!blog){
        res.status(404).json({msg:"blog not found"})
    }
    res.status(200).json({blog})
}

 const deleteBlog=async (req,res,next)=>{
    const id=req.params.id;
    let blog;
    let existingUser;
    try{
        blog=await Blog.findByIdAndDelete(id).populate('user')
await blog.user.blogs.pull(blog);
await blog.user.save();
      

    }catch(err){
        console.log(err)
    }

    if(!blog){
    return    res.status(404).json({msg:"blog not found!"})
    }
    return res.status(200).json({msg:"successfully deleted"})
}


    const getByUser=async (req,res,next)=>{
    let userId=req.params.id;
    let userBlogs;
    try{
            userBlogs= await User.findById(userId).populate("blogs")
    }catch(err){
        console.log(err)
    }
    if(!userBlogs){
    return    res.status(404).json({msg:"no data found"})
    }
    return res.status(200).json({blogs:userBlogs})

}

module.exports={getAllBlog,getById,getByUser,addBlog,updateBlog,deleteBlog}