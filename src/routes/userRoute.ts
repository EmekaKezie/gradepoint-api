import { Router } from "express";
import { createUser, getUsers } from "../modules/userModule";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;
