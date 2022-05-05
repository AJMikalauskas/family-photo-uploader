import React, { useState } from "react";

const PhotoUploader = () => {
    // window.addEventListener('load', function() {
    //     document.querySelector('input[type="file"]').addEventListener('change', function() {
    //         if (this.files && this.files[0]) {
    //             var img = document.querySelector('imageUpload');
    //             img.onload = () => {
    //                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
    //             }
      
    //             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
    //         }
    //     });
    //   });
    const [img, setImg] = useState();
    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImg(URL.createObjectURL(img))
        }
    }
    return (
        <div>
            <img src={img} alt="imgUpload"/>
            <h1>Add Photo Below:</h1>
            <input type="file" name="myImage" onChange={onImageChange} />
        </div>
    )
}

export default PhotoUploader;