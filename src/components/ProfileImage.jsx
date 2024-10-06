import React, { useState } from "react";

const ProfileImage = () => {
  const defaultImage =
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  // Handler for image selection
  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*"
        onChange={imageChangeHandler}
        className="absolute inset-0 cursor-pointer opacity-0"
      />

      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full block object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
