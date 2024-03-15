import { Router } from "express";
import { createValuePoints , getLatestValueById } from "@/controllers/value.controller"

const router = Router()
// TODO : Create a Read Controller
router.get("/:id" , getLatestValueById)

// TODO : Create a Write Controller
router.post("/", createValuePoints)

export default router