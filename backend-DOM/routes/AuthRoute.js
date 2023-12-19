import express from "express";
import { Login, Me } from "../controllers/Auth.js"

const router = express.Router();

router.post('/login', Login);
router.get('/me', Me);

export default router;