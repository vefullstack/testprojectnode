import { Router } from "express";
import {
  getService, 
  createAndUpdateService, 
} from "../controllers/serviceController.js";
const router = Router();

router.get("/", getService);
router.post("/add", createAndUpdateService); 

export default router;
