"use client";

import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const inputRef = useRef();
  const [pickedImage, setPickedImage] = useState()
  const handlePick = () => {
    inputRef.current.click()
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if(!file){
        setPickedImage(null);
        return
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
        setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  };
  return (
    <div className={classes.picker}>
      <label htmlFor="">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No picked image</p>}
            {pickedImage && <Image src={pickedImage} fill alt="preview"/>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePick}>
          Select an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
