import express from "express";
import { authenticate, authoriseAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").post(authenticate, authoriseAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authoriseAdmin, updateCategory);
router
  .route("/:categoryId")
  .delete(authenticate, authoriseAdmin, removeCategory);

router.route("/categories").get(listCategory);
router.route("/:id").get(readCategory);

export default router;
