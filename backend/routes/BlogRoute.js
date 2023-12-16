import express from "express";
import {
    getBlogs,
    getBlogsById,
    createBlogs,
    updateBlogs,
    deleteBlogs
} from "../controllers/Blogs.js"

const router = express.Router();

router.get('/blog', getBlogs);
router.get('/blog/:id', getBlogsById);
router.post('/blog', createBlogs);
router.patch('/blog/:id', updateBlogs);
router.delete('/blog/:id', deleteBlogs);

export default router;