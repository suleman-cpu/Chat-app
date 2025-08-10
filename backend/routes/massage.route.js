import express from "express";
import protectRoute from "../middleware/protectMassageRoute.middleware.js"
import { sendMassage,getMassage } from "../controllers/massage.controller.js";
const router = express.Router();

router.post("/send/:Id",protectRoute, sendMassage)
router.get("/:Id",protectRoute, getMassage)

export default router