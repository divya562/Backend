import { v2 as cloudinary } from "cloudinary";
import fs from "fs"



    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRETE 
    });
 

    const uploadOnCloudinary = async (localpath) => {
        try {
            if(!localpath) return null

            //upload file on cloudanary
            const response = await cloudinary.uploader.upload(localpath, {
                resource_type: "auto"
            })

            //file has upload succesfully
            // console.log("file upload successfully, " , response.url);
            fs.unlinkSync(localpath)
            return response
        } catch (error) {
                fs.unlinkSync(localpath); //remove the localy saved temporary file as the upload operation got failed
                return null;
        }
    }

export {uploadOnCloudinary}