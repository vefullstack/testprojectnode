import { Router } from "express";
import {
  getService, 
  createService, 
} from "../controllers/serviceController.js";
const router = Router();

router.get("/", getService);
router.post("/add", createService); 

export default router;
