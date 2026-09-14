import userModel from "../model/userModel.js"
import bcrypt from "bcrypt"
/**
 * CRUD
 * CREATE USER (POST)
 * READ USER(GET) : GENERAL GET, SINGLE GET
 * UPDATE USER(PUT)
 * DELETE USER(DELETE)
 */
//CREATE USER(POST)
export const createUser = async (req, res) => {
    try {
        const { name, email, RegNo } = req.body;
        const user = await userModel.create({
             name, email, RegNo
             });
        return res.status(201).json({ 
            message: "User created successfully",  
            Data : user
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//GENERAL GET:
 

//UPDATE USER:
export const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        const getSingleUser = await userModel.findById(id);
        if (!getSingleUser) {
            return res.status(404).json({
                 message: "User not found" 
                });
        }
        return res.status(200).json({ 
            message: "User retrieved successfully",  
            Data : getSingleUser
        });
    } catch (error) {
        return res.status(500).json({
             message: error.message 
            });
    }
};

//UPDATE USER:
export const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const {name} = req.body
        const updateUser = await userModel.findByIdAndUpdate(id, {name}, {new: true})

        return res.status(200).json({
            message: "User updated successfully",
            Data: updateUser
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const deleteUser = await userModel.findByIdAndDelete(id)
        return res.status(200).json({
            message: "User deleted successfully",
            Data: deleteUser
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

