import React, { useState } from 'react';
import axios from 'axios';



const ImageUpload = () => {
 const [image, setImage] = useState('');
 import.meta.env.VITE_CLOUDINARY_NAME;
 import.meta.env.VITE_CLOUDINARY_APIKEY;
 import.meta.env.VITE_CLOUDINARY_APISECRET;

 const uploadImage = async (e) => {
   console.log("aqui esta", e)
 const files = e.target.files;
 const data = new FormData();
 data.append('file', files[0]);
 data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);
 data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET); 
console.log("aqui esta data", data) 
try {
    console.log('Data being sent to Cloudinary:', data);
 const uploadRes = await axios({
   method:'post',
   url:import.meta.env.VITE_CLOUDINARY_URL,
  
  
   data: data
  });
 console.log('Response from Cloudinary:', uploadRes);
 const { url } = uploadRes.data;
 setImage(url);
 } catch (err) {
 console.error("Error uploading the image", err);
 }
 };
 return (
 <div>
 <h1>Imagen Portada</h1><input type="file" onChange={uploadImage} />
 {image && <img src={image} alt="Uploaded" style={{ width: '300px' }} />}
 </div>
 );
};
export default ImageUpload;