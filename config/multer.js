import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'upload');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
})
const upload = multer({storage: storage});
export default upload;
// multer is express, node js middleware for handling file uploads