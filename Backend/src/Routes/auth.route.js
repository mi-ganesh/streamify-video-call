import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {signup,login,logout,onboard, resetPassword, forgotPassword} from  "../controllers/auth.controller.js"

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

router.post("/onboarding",protectRoute,onboard);

router.post("/forgot-password", forgotPassword); 
router.post("/reset-password/:token", resetPassword); 

router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({ success:true,user:req.user});
})

export default router;