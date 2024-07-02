import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/userController.js";

import { authenticate, authoriseAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();
router
  .route("/")
  .post(createUser)
  .get(authenticate, authoriseAdmin, getAllUsers);

router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

// admin routes
router
  .route("/:id")
  .delete(authenticate, authoriseAdmin, deleteUserById)
  .get(authenticate, authoriseAdmin, getUserById)
  .put(authenticate, authoriseAdmin, updateUserById);

export default router;
