import express from "express";
import { signin, singup } from "../controllers/auth.js";

const router = express.Router();

// sign up
router.post("/signup", singup);

// sign in
router.post("/signin", signin);

// google auth
router.post("/google", );


export default router;