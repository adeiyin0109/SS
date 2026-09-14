import productModel from "../model/productModel.js";
import userModel from "../model/userModel.js";
import cloudinary from "../config/cloudinary.js";
/**
 *  create: upload product
 * get all:
 * get one
 * update: update product
 * delete
 */

//create / upload
export const uploadProduct = async (req, res) => {
    try {
      const getUserId = await userModel.findById(req.params.userId)
        const { name, description, price, category, stock, quantity, image } = req.body;
        if (!getUserId){
          return res.status(404).json({
            message: "User not found"
          })
        }

        if (!req.file){
          return res.status(400).json({
            message: "Image is required....pleas upload an image"
          })
        }
        const result = await cloudinary.uploader.upload(req.file.path)
        const imageUrl = result.secure_url;

        const product = await productModel.create({
            name, description, price, category, stock, quantity, image: imageUrl
        });

        await getUserId.products.push(product._id)
        await getUserId.save()

      return   res.status(201).json(
        {
          message:"Product uploaded successfully", product
    });
    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }
};
//get all
export const getAllProducts = async (req, res) =>{
  try{
    
    const getAll = await productModel.find()
    return res.status(200).json({
      message:"All products fetched successfully",
      data: getAll
    })
  }catch{
    return res.status(500).json({message: error.message})
  }
}

