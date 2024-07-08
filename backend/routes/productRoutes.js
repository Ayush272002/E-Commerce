import express from "express";
import formidable from "express-formidable";
const router = express.Router();

// Importing controllers
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  getProductById,
  fetchAllProducts,
} from "../controllers/productController.js";
import { authenticate, authoriseAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";

router
  .route("/")
  .get(fetchProducts)
  .post(authenticate, authoriseAdmin, formidable(), addProduct);

router.route("/allproducts").get(fetchAllProducts);

router
  .route("/:id")
  .get(getProductById)
  .put(authenticate, authoriseAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authoriseAdmin, removeProduct);

export default router;
