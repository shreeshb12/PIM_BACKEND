const cloudinary = require("cloudinary").v2;

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_SEC_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY // Click 'View Credentials' below to copy your API secret
});