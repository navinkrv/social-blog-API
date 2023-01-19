import express from "express"
import { addBlog, deleteBlog, getAllBlog, getById, getByUser, updateBlog } from "../controllers/blog-controller";
const blogRouter= express.Router();

blogRouter.get("/",getAllBlog)
blogRouter.post('/add',addBlog)
blogRouter.put('/update/:id',updateBlog)
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteBlog)
blogRouter.get("/user/:id",getByUser)
export default blogRouter;