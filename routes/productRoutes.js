import express from "express";
import  {uploadProduct, getAllProducts} from "../controller/productController.js";
import upload from "../config/multer.js";
const productRoutes = express.Router();

productRoutes.post('/upload/:userId',upload.single('image'), uploadProduct)
productRoutes.get('/getAll', getAllProducts)

export default productRoutes