import {Router} from "express";
import { createLeave, getLeaves, updateLeaveStatus } from "../controllers/leaveApplicationControllers.js";
import { protect, protectAdmin } from "../middleware/auth.js";

const leaveApplicationRouter = Router();

leaveApplicationRouter.post("/",protect,createLeave);
leaveApplicationRouter.get("/",protect,getLeaves);
leaveApplicationRouter.patch("/:id",protect, protectAdmin,updateLeaveStatus);

export default leaveApplicationRouter;

