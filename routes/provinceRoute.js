import express from "express";
import { upload } from "../middleware/storage.js";
import { importProvince } from "../controllers/provinceController.js";

const router = express.Router();

router.post("/importProvince", upload.single("file"), importProvince);

export default router;
